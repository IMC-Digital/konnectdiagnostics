// src/services/couponService.js
const createpoolConnection = require("../../config/database");
const pool = createpoolConnection();

const applyCouponCode = (couponApplied, callback) => {
  const query = "SELECT * FROM coupons WHERE code = ? AND active = ?";
  pool.query(query, [couponApplied, 1], (error, coupon) => {
    callback(error, coupon);
  });
};

module.exports = {
  applyCouponCode,
};
