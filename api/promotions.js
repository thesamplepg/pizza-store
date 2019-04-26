const express = require('express');
const controllers = require('../controllers/promotions');
const upload = require('../utilits/multer');

const router = express.Router();

router.get('/', controllers.getProtmotions);
router.post('/create', upload.single('image'), controllers.createPromotion);
router.delete('/delete', controllers.deletePromotion);

module.exports = router;