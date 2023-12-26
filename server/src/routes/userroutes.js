// userroutes.js
const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');
const { verifyUser } = require('../middleware/userMiddleware'); // Import the verifyUser middleware

// Define routes
router.get('/', verifyUser, UserController.getUserInfo);
// router.post('/add-new-address', verifyUser, UserController.addNewAddress);
router.post('/add-new-address', UserController.addNewAddress);

module.exports = router;
