const express = require('express');
const router = express.Router();
const { handleRegisterUser, handleLoginUser,getDashboardManagerDetails,getDashboardCrewId  } = require('../controllers/authController');
const verifyToken = require('../middlewares/authMiddleware');



// Registration endpoint
router.post('/register', handleRegisterUser);

// Login endpoint
router.post('/login', handleLoginUser);


router.get('/dashboard-manager', getDashboardManagerDetails, verifyToken );

router.get('/dashboard-crew/:id', getDashboardCrewId);

module.exports = router;
