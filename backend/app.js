
// backend/app.js
require('dotenv').config();
require('express-async-errors');
const express = require('express');
const adminRoutes = require('./routes/admin');
const { authenticate } = require('./middleware/auth');  // Destructure to access authenticate

const connectDB = require('./db/connect');
const app = express();
const cors = require('cors');

// Allow CORS from your frontend application
app.use(cors({
    origin: 'http://localhost:5173', // Change this to your frontend URL if needed
    methods: 'GET,POST, PUT, DELETE',
    allowedHeaders: ['Content-Type', 'Authorization'],
}));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/admin/', adminRoutes);

// Example of a protected route
app.use('/api/v1/protected-route', authenticate, (req, res) => {
  res.send('This is a protected route');
});

// Health Check
app.get('/', (req, res) => {
  res.send('RAVENDA');
});

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    // Connect to MongoDB
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => console.log(`Server is listening on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();


