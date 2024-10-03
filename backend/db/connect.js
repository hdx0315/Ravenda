
// backend/db/connect.js
const mongoose = require('mongoose')
require('dotenv').config()

const url = process.env.MONGO_URI

const connectDB = (url) => {
  return mongoose.connect(url, {
  })
}

module.exports = connectDB
