// userroutes.js
const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');
const { verifyUser } = require('../middleware/userMiddleware');

// Define routes
router.get('/', verifyUser, UserController.getUserInfo);
router.post('/add-new-address', UserController.addNewAddress);
router.get('/get-user-addresses', UserController.getUserAddresses);

module.exports = router;
