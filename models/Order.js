const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    address: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: Number,
        required: true
    },
    products: {
        type: Array,
        default: []
    },
    delivered: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('order', OrderSchema);