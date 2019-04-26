const mongoose = require('mongoose');

const PromotionSchema = new mongoose.Schema({
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
        type: String,
        required: true
    }
});

module.exports = mongoose.model('promotion', PromotionSchema);