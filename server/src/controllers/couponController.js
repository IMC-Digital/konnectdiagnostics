const couponServices = require("../services/couponServices");

const applyCoupon = async (req, res) => {
  const { couponApplied } = req.body;

  couponServices.applyCouponCode(couponApplied, (error, coupon) => {
    if (error) {
      console.error('Error fetching coupons data:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }

    if (coupon.length === 0) {
      return res.status(404).json({ error: 'Coupon not found or inactive.' });
    }

    res.json({ success: true, message: coupon[0].message, discount: coupon[0].discount_percentage });
  });
};

module.exports = {
  applyCoupon,
};
