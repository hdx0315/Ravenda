
//routes/admin.js

const express = require('express');

const { loginAdmin } = require('../controllers/admin');

const { createProduct } = require('../controllers/adminNewProduct');
const { authenticate } = require('../middleware/auth');

const { getProducts, updateProductByID, getProductByID} = require('../controllers/adminEditItem')

const router = express.Router();

// Route for admin login
router.post('/login', loginAdmin);

// Route for creating a new product (requires authentication)
router.post('/newProduct', authenticate, createProduct);

// Route for fetching data
router.get('/editItem', authenticate, getProducts)

router.get('/editItem/:id', authenticate, getProductByID)
router.put('/editItem/:id', authenticate, updateProductByID)

module.exports = router;

