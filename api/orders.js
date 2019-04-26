const express = require('express');
const controllers = require('../controllers/orders');

const router = express.Router();

router.get('/', controllers.getOrders);
router.post('/create', controllers.createOrder);
router.delete('/delete', controllers.deleteOrder);

module.exports = router;