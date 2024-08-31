const express = require('express');
const router = express.Router();
const { handleRegisterUser, handleLoginUser,} = require('../controllers/authController');


// Registration endpoint
router.post('/register', handleRegisterUser);

// Login endpoint
router.post('/login', handleLoginUser);


module.exports = router;
