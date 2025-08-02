const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/Auth');
const { mustLogin } = require('../middleware/authMiddleware');

router.post('/register', AuthController.register);
router.post('/login', AuthController.login);
router.post('/logout', mustLogin, AuthController.logout);

module.exports = router;