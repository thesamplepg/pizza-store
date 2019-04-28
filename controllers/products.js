const Product = require('../models/Product');
const fs = require('fs-extra');
const { uploadImage, deleteImage } = require('./utilits');
const { ObjectId } = require('mongodb');

exports.getMenu = async(req, res) => {

    try {
        
        if(req.query.type) {

            const { type } = req.query;

            res.status(200).json({ 
                [type + 's']: await Product.find({ type }), 
                success: true 
            });

        } else {

            const menu = {
                pizzas: await Product.find({type: 'pizza'}),
                snakes: await Product.find({type: 'snake'}),
                desserts: await Product.find({type: 'dessert'})
            }

            res.status(200).json({success: true, products: menu});
        
        }

    } catch (error) {
        console.log(error);

        res.status(500).json({success: false});
    }
}

exports.createProduct = (req, res) => {

    req.body.price = +req.body.price;

    const { file } = req;

    uploadImage(file.path)
        .then(async(result) => {

            const data = {...req.body};
            
            data.image = {
                url: result.secure_url,
                id: result.public_id
            }

            const newProduct = await new Product(data).save();

            res.status(200).json({ product: newProduct });

            return Promise.resolve();
                    
        })
        .then(() => fs.remove(file.path))
        .catch(error => {

            if(error.validationError) {
                res.status(400).json({ 
                    success: false,
                    validationFails: Object.keys(error.errors)
                });
            } else {
                res.status(500).json({
                    success: false
                });
            }

        });

};

exports.deleteProduct = (req, res) => {

    if(req.query.id && ObjectId.isValid(req.query.id)) {

        Product.findOneAndDelete({_id: ObjectId(req.query.id)})
            .then(async deletedProduct => {

                if(deletedProduct) {
                    res.status(200).json({ success: true, deletedProduct });

                    return deleteImage(deletedProduct.image.id);
                } else {
                    res.status(404).json({ success: false, error: 'Product not found' });
                }

            })
            .catch(err => {
                if(!err.deleted) res.status(500).json({ success: false });
            });

    } else {
        res.status(400).json({ success: false, error: 'Wrong product`s id' });
    }

}

exports.updateProduct = async(req, res) => {

    try {

        const product = await Product.updateOne(
            {_id: ObjectId(req.body.id)},
            {$set: {...req.body.updates}}
        );
    
        res.status(200).json({ success: true });

    } catch (error) {
        
        console.log(error);

        res.status(500).json({ success: false });

    }

}