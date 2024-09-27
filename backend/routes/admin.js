const express = require('express');
const { loginAdmin } = require('../controllers/admin');
const { createProduct } = require('../controllers/adminNewProduct');
const { authenticate } = require('../middleware/auth');

const router = express.Router();

// Route for admin login
router.post('/login', loginAdmin);

// Route for creating a new product (requires authentication)
router.post('/newProduct', authenticate, createProduct);

module.exports = router;
