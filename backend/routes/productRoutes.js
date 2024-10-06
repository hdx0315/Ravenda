

// backend/router/productRoutes.js


const express = require('express')


const { getProducts} = require('../controllers/products');

const router = express.Router();


//routes

// route to get all products
router.get('/getAllProducts',getProducts)

module.exports = router;

