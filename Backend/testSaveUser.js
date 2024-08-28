
const mongoose = require('mongoose');
const User = require('./models/User');
const bcrypt = require('bcryptjs');
  
mongoose.connect('mongodb://127.0.0.1:27017/Userdb', {
}).then(async () => {
  const hashedPassword = await bcrypt.hash('testpassword123456', 10);
  const newUser = new User({
    username: 'ABC',
    password: hashedPassword,
    role: 'manager',
  });

  await newUser.save();
  console.log('User saved successfully');
  mongoose.disconnect();
}).catch(err => console.error('MongoDB connection error:', err));
