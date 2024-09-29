

// controllers/adminEditItem.js

const { Detail } = require('../models/admin');

const getProducts = async ( req, res) => {
    try {
        const products = await Detail.find({});
        res.status(200).json(products);
    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).json({ message: 'Failed to fetch products', error });
    
    }
} 

const getProductByID = async (req, res) => {
    const { id } = req.params;
    try{
        const product = await Detail.findById(id)
        res.status(200).json(product);
    }catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).json({ message: 'Failed to fetch products', error });
}}

const updateProductByID = async (req, res) => {
    const { id } = req.params;
    const { title, image, price, category, newArrival, hotDeal, colors, sizes } = req.body;

    console.log('Updating product:', { id, title, image, price, category, newArrival, hotDeal, colors, sizes });

    try {
        const updatedProduct = await Detail.findByIdAndUpdate(id, {
            title,
            image,
            price,
            category,
            newArrival,
            hotDeal,
            colors,
            sizes,
        }, { new: true });

        if (!updatedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.status(200).json(updatedProduct);
    } catch (error) {
        console.error('Error updating product:', error);
        res.status(500).json({ message: 'Error updating product', error });
    }
};



module.exports = { getProducts, updateProductByID ,getProductByID};