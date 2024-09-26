

const express = require('express');
const router = express.Router();
const { createProduct } = require('../controllers/admin');

router.route('/admin').post(createProduct);

module.exports = router;



