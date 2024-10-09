

// backend/controllers/products.js

const {Detail} = require('../models/admin')

const getProducts = async (req, res) => {

    try{
        const products = await Detail.find({});

        res.status(200).json(products);
    }
    catch(error){
        console.error(error);
        res.status(500).json({message: 'Failed to fetch products', error});
    }
}

const getSingleProduct = async (req, res) =>{

    try{
        const product = await Detail.findById(req.params.id);

        res.status(200).json(product);
    }
    catch(error){
        console.error(error);
        res.status(500).json({message: 'Failed to fetch product', error});
    }
}

module.exports = {
    getProducts, 
    getSingleProduct
}