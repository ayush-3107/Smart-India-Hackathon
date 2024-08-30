const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/User');
const router = express.Router();

// Registration endpoint
router.post('/register', async (req, res) => {
  try {
    const { name, id, password, phoneNumber, email, dob, gender, yearOfJoining, address, role, crewRole, experience, skillLevel, timingPreferences } = req.body;

    console.log('Received data:', req.body);

    // Check if the user already exists
    const existingUser = await User.findOne({ id });
    if (existingUser) {
      return res.status(400).json({ message: 'User ID already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user object
    const newUser = {
      name,
      id,
      password: hashedPassword,
      phoneNumber,
      email,
      dob,
      gender,
      yearOfJoining,
      address,
      role
    };

    // Add crew-specific fields if the role is 'Crew'
    if (role === 'Crew') {
      newUser.crewRole = crewRole;
      newUser.experience = experience;
      newUser.skillLevel = skillLevel;
      newUser.timingPreferences = timingPreferences;
    }

    // Save the new user to the database
    await new User(newUser).save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Registration error:', error);
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
    }
  } catch (error) {
    console.error('Login error:', error);  // Log the error details
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
