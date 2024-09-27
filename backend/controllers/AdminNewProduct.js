

const Detail = require('../models/admin');

const createProduct = async (req, res) => {
    try {
        const detail = await Detail.create(req.body);
        res.status(201).json({ detail });
    } catch (error) {
        res.status(400).json({ message: 'Error creating product', error });
    }
};

module.exports = { createProduct };


