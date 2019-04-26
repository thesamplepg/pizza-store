const express = require('express');
const productsControllers = require('../controllers/products');
const upload = require('../utilits/multer');

const router = express.Router();

router.get('/', productsControllers.getMenu);
router.post('/create', upload.single('image'), productsControllers.createProduct);
router.delete('/delete', productsControllers.deleteProduct);
router.patch('/update', productsControllers.updateProduct);

module.exports = router;