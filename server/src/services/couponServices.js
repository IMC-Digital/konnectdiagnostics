// src/services/couponService.js
const createOtpDbConnection = require("../../config/database");
const otpdb = createOtpDbConnection();

const applyCouponCode = (couponApplied, callback) => {
  const query = "SELECT * FROM coupons WHERE code = ? AND active = ?";
  otpdb.query(query, [couponApplied, 1], (error, coupon) => {
    callback(error, coupon);
  });
};

module.exports = {
  applyCouponCode,
};
