module.exports = (app) => {
    app.use('/api/products', require('./products'));
    app.use('/api/promotions', require('./promotions'));
    app.use('/api/orders', require('./orders'));
}