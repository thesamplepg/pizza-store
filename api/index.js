module.exports = (app) => {
    app.use('/api/products', require('./products'));
}