const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    image: {
        url: {
            type: String,
            require: true
        },
        id: {
            type: String,
            require: true
        }
    },
    description: {
        type: String
    },
    price: {
        type: Number,
        required: true
    },
    value: {
        energyValue: {
            type: Number
        },
        carbohydrates: {
            type: Number
        },
        proteins: {
            type: Number
        },
        fats: {
            type: Number
        }
    }
});

module.exports = mongoose.model('product', ProductSchema);