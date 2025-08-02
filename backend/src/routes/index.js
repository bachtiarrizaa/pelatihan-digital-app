const express = require('express');
const router = express.Router();

const AuthRoutes = require('./AuthRoutes');
const AdminRoutes = require('./AdminRoutes');

router.use('/auth', AuthRoutes);
router.use('/admin', AdminRoutes);

module.exports = router;
