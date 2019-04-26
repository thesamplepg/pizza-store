const mongoose = require('mongoose');
const keys = require('../configs/keys');

module.exports = () => {
    return mongoose.connect(keys.mongoURI, { useNewUrlParser: true }, (err) => {
        if(err) return Promise.reject(err);
    
        return Promise.resolve();
    });
}