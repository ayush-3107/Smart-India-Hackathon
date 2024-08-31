const express = require('express');
const router = express.Router();
const { handleRegisterUser, handleLoginUser } = require('../controllers/authController');
const assignBusToCrew=require("../utils/busAssignment")


// Registration endpoint
router.post('/register', handleRegisterUser);

// Login endpoint
router.post('/login', handleLoginUser);


router.get('/dashboard-manager', (req, res) => {
    const assignmentData = assignBusToCrew();
    res.json(assignmentData);
});

router.get('/dashboard-crew', (req, res) => {
    const assignmentData = assignBusToCrew();
    res.json(assignmentData);
});

module.exports = router;
