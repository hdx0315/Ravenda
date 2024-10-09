
// backend/models/admin.js
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const addProductSchema = new mongoose.Schema({
    title: {
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
        type: [String],
        default: []
    },
    sizes: {
        type: [String],
        default: []
    }
});

const adminSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const orderSchema = new mongoose.Schema({

  userName: {
    type: String,
    required: true,
  },
  telephoneNumber: {
    required: true,
    type:String
  },
  address:{
    type: String,
    required: true,
  },
  products: {
    type:Object
  },
  pdfURL: {
    type: String
  }


});

// Hash password before saving the admin
adminSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    return next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  console.log(this.password);
  next();
});

const Admin = mongoose.model('Admin', adminSchema);
const Detail = mongoose.model('Detail', addProductSchema);
const Orders = mongoose.model('Orders', orderSchema);

module.exports = { Detail, Admin, Orders };
