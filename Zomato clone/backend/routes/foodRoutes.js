const express = require('express');
const { addFood } = require('../controllers/foodController');
const { authenticateToken } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', authenticateToken, addFood);

module.exports = router;
