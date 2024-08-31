const express = require('express');
const router = express.Router();
const { handleRegisterUser, handleLoginUser,getDashboardCrewId } = require('../controllers/authController');
const verifyToken = require('../middlewares/authMiddleware');


// Registration endpoint
router.post('/register', handleRegisterUser);

// Login endpoint
router.post('/login', handleLoginUser);


router.get('/dashboard-manager', verifyToken , (req, res) => {
    const assignmentData = assignBusToCrew();
    res.json(assignmentData);
});

router.get('/dashboard-crew/:id', getDashboardCrewId);

module.exports = router;
