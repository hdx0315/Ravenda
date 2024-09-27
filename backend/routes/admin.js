

const express = require('express');
const router = express.Router();

const { createProduct } = require('../controllers/AdminNewProduct');
const { loginAdmin } = require('../controllers/admin');

router.route('/newProduct').post(createProduct);
router.post('/login', loginAdmin);

module.exports = router;


