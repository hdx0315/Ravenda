

const Detail = require('../models/admin');

const createProduct = async (req, res) => {
    const { text, image, price, category, newArrival, hotDeal, colors, sizes } = req.body;

    const detail = await Detail.create({
        text,
        image,
        price,
        category,
        newArrival,
        hotDeal,
        colors,
        sizes,
    });

    res.status(201).json({ detail });
};

module.exports = { createProduct };



