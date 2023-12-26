const express = require('express');
const router = express.Router();
const couponController = require('../controllers/couponController');

// Route to apply a coupon
router.post('/apply-coupon', couponController.applyCoupon);

module.exports = router;
