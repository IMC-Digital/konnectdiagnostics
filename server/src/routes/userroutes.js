// userroutes.js
const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');
const { verifyUser } = require('../middleware/userMiddleware');

// Define routes
router.get('/', verifyUser, UserController.getUserInfo);
router.post('/add-new-address', UserController.addNewAddress);
router.post('/add-new-member', UserController.addNewMember);
router.get('/get-user-addresses', UserController.getUserAddresses);
router.get('/get-altmobi', UserController.getUserAltmob)
router.get('/get-members', UserController.getUserMembers);

module.exports = router;
