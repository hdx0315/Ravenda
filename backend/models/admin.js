

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
        type: Array,
        default: []
    },
    sizes: {
        type: Array,
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



module.exports = {Detail, Admin};



