

// controllers/admin.js
const {Admin} = require('../models/admin');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

require('dotenv').config();

// controllers/admin.js
const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

  
    const admin = await Admin.findOne({ email });

    if (!admin) {
      return res.status(404).json({ message: 'Admin not found' });
    }

    const isPasswordValid = await bcrypt.compare(password, admin.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ adminId: admin._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({ token });

  } catch (error) {
    console.error("Error logging in admin:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};



module.exports = { loginAdmin };

