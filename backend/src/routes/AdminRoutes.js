const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/Auth');
const { mustAdmin } = require('../middleware/authMiddleware');

router.get('/dashboard', mustAdmin, AuthController.login);

module.exports = router;
