const UserService = require('../services/userService');

const getUserInfo = async (req, res) => {
    try {
      res.json({ Status: "ok", userid: req.user_id, cart_id: req.cart_id });
    } catch (error) {
      console.error('Error getting user info:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
}

const addNewAddress = async (req, res) => {
    try {
      const result = await UserService.addNewAddress(req.body);
      res.status(200).json(result);
    } catch (error) {
      console.error('Error adding address:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = {
    getUserInfo,
    addNewAddress
};
