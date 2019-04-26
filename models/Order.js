const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    street: {
        type: String,
        required: true
    },
    flat: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('order', OrderSchema);