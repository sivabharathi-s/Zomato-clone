const express = require('express');
const { signUp, adminSignUp, login, adminLogin } = require('../controllers/authController');

const router = express.Router();

router.post('/signup', signUp);
router.post('/admin-signup', adminSignUp);
router.post('/login', login);
router.post('/admin-login', adminLogin);

module.exports = router;