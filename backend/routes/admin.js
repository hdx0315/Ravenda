
// backend/routes/admin.js

const express = require('express');

const { loginAdmin } = require('../controllers/admin');

const { createProduct } = require('../controllers/adminNewProduct');
const { authenticate } = require('../middleware/auth');

const { 
    getProducts, 
    updateProductByID, 
    getProductByID, 
    deleteProductByID
} = require('../controllers/adminEditItem')

const {
    getOrders,
    createOrder
} = require('../controllers/adminOrders')

const router = express.Router();


// routes

// Route for admin login
router.post('/login', loginAdmin);

// Route for creating a new product (requires authentication)
router.post('/newProduct', authenticate, createProduct);

// Route for fetching data
router.get('/editItem', authenticate, getProducts)

router.get('/editItem/:id', authenticate, getProductByID)
router.put('/editItem/:id', authenticate, updateProductByID)
router.delete('/editItem/:id', authenticate, deleteProductByID)

router.post('/createOrder', createOrder)
router.get('/getOrders', getOrders)

module.exports = router;

