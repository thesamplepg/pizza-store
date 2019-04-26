const Order = require('../models/Order');
const { ObjectId } = require('mongodb');

exports.getOrders = async(req, res) => {

    try {
        
        const orders = await Order.find({});

        res.status(200).json({success: true, orders});

    } catch (error) {
        
        console.log(error);

        res.status(500).json({success: false});

    }

}

exports.createOrder = (req, res) => {

    new Order(req.body).save()
        .then(order => {

            res.status(200).json({success:true});

        })
        .catch(error => {

            if(error.validationError) {
                res.status(400).json({
                    success: false,
                    validationFails: error.errors
                });
            } else {
                res.status(500).json({success: false});
            }

        });

}

exports.deleteOrder = (req, res) => {

    if(req.query.id && ObjectId.isValid(req.query.id)) {

        Order.findByIdAndDelete({_id: ObjectId(req.query.id)})
            .then(deletedOrder => {
                
                if(deletedOrder) {

                    res.status(200).json({success: true, deletedOrder});

                } else {

                    res.status(404).json({success: false, error: 'Order not found'});

                }

            })
            .catch(err => {
                console.log(err);

                res.status(500).json({success: false});
            });

    } else {

        res.status(400).json({success: false, error: 'Wrong orders`s id'});

    }

}