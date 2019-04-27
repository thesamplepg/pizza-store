const express = require('express');
const controllers = require('../controllers/admins');

const router = express.Router();

router.get('/', controllers.getAdmins);
router.get('/verify', controllers.verify);
router.post('/login', controllers.signIn);
router.post('/create', controllers.createAdmin);
router.delete('/delete', controllers.deleteAdmin);

module.exports = router;