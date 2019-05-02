const express = require('express');
const controllers = require('../controllers/orders');

const router = express.Router();

router.get('/', controllers.getOrders);
router.post('/create', controllers.createOrder);
router.delete('/delete', controllers.deleteOrder);
router.put('/delivered', controllers.switchToDelivered);

module.exports = router;