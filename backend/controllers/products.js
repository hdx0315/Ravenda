

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

module.exports = {getProducts}