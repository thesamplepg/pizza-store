module.exports = (app) => {
    app.use('/api/products', require('./products'));
    app.use('/api/promotions', require('./promotions'));
}