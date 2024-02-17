// userroutes.js
const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');
const { verifyUser } = require('../middleware/userMiddleware');

// User Routes
router.get('/', verifyUser, UserController.getUserInfo);
router.get('/get-profile/:userId', UserController.getUserProfile);

// User Authentication
router.post('/login-otp', UserController.loginOTP);
router.post('/verify-otp', UserController.verifyOTP);

// User Addresses
router.post('/add-new-address', UserController.addNewAddress);
router.get('/get-user-addresses', UserController.getUserAddresses);

// User Members
router.post('/add-new-member', UserController.addNewMember);
router.get('/get-members', UserController.getUserMembers);

// User Alt mobile number
router.get('/get-altmobi', UserController.getUserAltmob)

module.exports = router;
