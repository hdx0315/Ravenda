

// backend/router/productRoutes.js


const express = require('express')


const { getProducts, getSingleProduct} = require('../controllers/products');

const router = express.Router();


//routes

// route to get all products
router.get('/getAllProducts',getProducts)

router.get('/getSingleProduct/:id',getSingleProduct)

module.exports = router;

