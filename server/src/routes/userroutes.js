// userroutes.js
const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');
const { verifyUser } = require('../middleware/authenticationMiddleware');

// User Routes
router.get('/', verifyUser, UserController.getUserInfo);
router.get('/get-profile/:userId', verifyUser, UserController.getUserProfile);

// User Authentication
router.post('/login-otp', UserController.loginOTP);
router.post('/verify-otp', UserController.verifyOTP);

// User Addresses
router.post('/add-new-address', UserController.addNewAddress);
router.get('/get-user-addresses/:userId', UserController.getUserAddresses);
// router.get('/get-user-addresses/:userId', (req, res) => { res.send(req.params.userId) });

// User Members
router.post('/add-new-member', UserController.addNewMember);
router.get('/get-members', UserController.getUserMembers);

// User Alt mobile number
router.get('/get-altmobi', UserController.getUserAltmob)

module.exports = router;
