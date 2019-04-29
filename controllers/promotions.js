const Promotion = require('../models/Promotion');
const { ObjectId } = require('mongodb');
const fs = require('fs-extra');
const { uploadImage, deleteImage } = require('./utilits');

exports.getProtmotions = async(req, res) => {
    
    try {

        const promotions = await Promotion.find({});
        
        res.status(200).json({success: true, promotions});

    } catch (error) {
        
        console.log(error);

        res.status(500).json({success: false});

    }

}

exports.createPromotion = (req, res) => {
    
    uploadImage(req.file.path)
        .then(result => {
            
            const data = { ...req.body };
            
            data.image = {
                url: result.secure_url,
                id: result.public_id
            }

            return new Promotion(data).save();
        })
        .then(promotion => {

            res.status(200).json({ promotion });

            fs.remove(req.file.path);

        })
        .catch(error => {

            if(error.ValidationError) {

                res.status(400).json({
                    success: false,
                    validationFails: Object.keys(error.errors)
                })

            } else {

                console.log(error);
                
                res.status(500).json({ success: false });

            }

        });

}

exports.deletePromotion = (req, res) => {

    if(req.query.id && ObjectId.isValid(req.query.id)) {

        Promotion.findOneAndDelete({_id: ObjectId(req.query.id)})
            .then(deletedPromotion => {

                if(deletedPromotion) {

                    res.status(200).json({ success: true, deletedPromotion })

                    return deleteImage(deletedPromotion.image.id);
                
                } else {

                    res.status(404).json({ success: false, error: 'Promotion not found' });

                }

            })
            .catch(err => {

                if(!err.deleted) res.status(500).json({ success: false });
                
            });

    } else {
        res.status(400).json({ success: false, error: 'Wrong promotion`s id' });
    }

}