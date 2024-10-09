

// backend/controllers/adminOrders.js


const {Orders} = require('../models/admin');

const createOrder = async (req, res) =>{
    try {
        console.log("controllers ", req.body);

        const detail = await Orders.create(req.body);
        res.status(201).json({ detail });

    } catch (error) {
        console.error('Error creating product:', error);
        res.status(400).json({ message: 'Error creating product', error });
    }
};

const getOrders = async (req, res) => {
    try {
        const products = await Orders.find({});
        res.status(200).json(products);

    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).json({ message: 'Failed to fetch products', error });
    }
}


module.exports = { 
    createOrder, 
    getOrders 
};




