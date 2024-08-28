const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const cors = require('cors');
require('dotenv').config(); // Load environment variables from .env file

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Middleware to parse JSON bodies

// Routes
app.use('/api/auth', authRoutes);

// Database connection
mongoose.connect('mongodb://127.0.0.1:27017/Userdb', {
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

  
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
