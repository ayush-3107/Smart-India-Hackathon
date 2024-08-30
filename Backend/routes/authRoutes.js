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


// Login endpoint
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    console.log('Received data:', req.body);

    // Find the user by username
    const user = await User.findOne({ username });
    if (!user) {
      console.log('User not found:', username);
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Check if the password is correct
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      console.log('Password mismatch for user:', username);
      return res.status(400).json({ message: 'Invalid credentials' });
    }

<<<<<<< HEAD
//     // Redirect based on the user's role
//     if (user.role === 'crew') {
//       console.log('Redirecting to DashboardCrew for user:', username);
//   //  /   return res.redirect('https://www.google.com/'); // Adjust the redirect path as needed
// } else if (user.role === 'manager') {
//   console.log('Redirecting to DashboardManager for user:', username);
//   return res.redirect('/dashboard-manager'); }// Adjust the redirect path as needed
 if(user.role===null) {
  console.log('Unknown role for user:', username);
  return res.status(400).json({ message: 'Invalid role' });
} else {
      return res.status(200).json({role: user.role});

=======
    // Redirect based on the user's role
    if (user.role === 'crew') {
      console.log('Redirecting to DashboardCrew for user:', username);
      res.redirect('https://github.com/'); 
    } else if (user.role === 'manager') {
      console.log('Redirecting to DashboardManager for user:', username);
      res.redirect('/dashboard-manager'); // Adjust the redirect path as needed
    } else {
      console.log('Unknown role for user:', username);
      res.status(400).json({ message: 'Invalid role' });
>>>>>>> c949a24606c954340902fca053414c7464a3df9c
    }
  } catch (error) {
    console.error('Login error:', error);  // Log the error details
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
