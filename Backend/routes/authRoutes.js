const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/User');
const router = express.Router();

// Registration endpoint
router.post('/register', async (req, res) => {
  try {
    const { username, password, role } = req.body;
    console.log('Received data:', req.body);

    // Check if the user already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      console.log('Username already exists:', username);
      return res.status(400).json({ message: 'Username already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log('Hashed password:', hashedPassword);

    // Create a new user
    const newUser = new User({ username, password: hashedPassword, role });
    await newUser.save();
    console.log('User saved successfully:', newUser);

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Registration error:', error);  // Log the error details
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
