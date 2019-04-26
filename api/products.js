const express = require('express');
const controllers = require('../controllers/products');
const upload = require('../utilits/multer');

const router = express.Router();

router.get('/', controllers.getMenu);
router.post('/create', upload.single('image'), controllers.createProduct);
router.delete('/delete', controllers.deleteProduct);
router.patch('/update', controllers.updateProduct);

module.exports = router;