

const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    newArrival: {
        type: Boolean,
        default: false
    },
    hotDeal: {
        type: Boolean,
        default: false
    },
    colors: {
        type: Array,
        default: []
    },
    sizes: {
        type: Array,
        default: []
    }
});

const Detail = mongoose.model('Detail', adminSchema);

module.exports = Detail;



