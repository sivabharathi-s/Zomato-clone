const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Route for signing in
router.post('/signin', authController.signIn);

// Route for logging in
router.post('/login', authController.login);

module.exports = router;