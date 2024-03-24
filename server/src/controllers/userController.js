const userService = require('../services/userService');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { default: axios } = require('axios');
const privateKey = process.env.PRIVATEKEY;

const loginOTP = async (req, res) => {
  const { number } = req.body;
  
  userService.loginOTP(number, (error, response) => {
    if (error) {
      // console.error('Error fetching user profile data:', error);
      console.log(error);
      res.status(500).json({ error: 'An error occurred' });
    } else {
      res.status(200).json(response); 
    }
  })
}

const verifyOTP = async (req, res) => {
  const { number, Otp } = req.body;

  userService.getUser(number, (error, response) => {
    if (error) {
      console.error('Error fetching user profile data:', error);
      res.status(500).json({ error: 'An error occurred' });
    } else {
      if (response.length > 0) {
        bcrypt.compare(Otp.toString(), response[0].otp, (err, response2) => {
          if (err) {
            console.error('Error in otp comparison:', err);
            return res.status(500).json({ error: "Error comparing otp" });
          }
    
          if (response2) {
            const user_id = response[0].user_id;
            const tokenPayload = { user_id };
            const token = jwt.sign(tokenPayload, privateKey, { expiresIn: "1d" });
            res.cookie('token', token);
            return res.json({ Status: "Verified" });
          } else {
            return res.status(401).json({ Error: "Password mismatch. Try Again" });
          }
        });
      } else {
        if (response.length === 0) {
          return res.status(401).json({ error: "User not found" });
        }
      }
    }
  })
}

const getUserInfo = async (req, res) => {
    try {
      res.json({ Status: "ok", userid: req.user_id, cart_id: req.cart_id });
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
}

const getUserProfile = async (req, res) => {
  const userId = req.params.userId;
  userService.getUserProfile(userId, (error, response) => {
    if (error) {
      console.error('Error fetching user profile data:', error);
      res.status(500).json({ error: 'An error occurred' });
    } else {
      res.status(200).json(response); 
    }
  }) 
}

const addNewAddress = async (req, res) => {
  const newAddressFormData = req.body;
  userService.addNewAddress(newAddressFormData, (error, response) => {
    if (error) {
      console.error('Internal Server Error(Adding Member):', error);
      res.status(500).json({ error: 'An error occurred at adding new member' });
    } else {
      res.status(200).json({ response })
    }
  })
}

const addNewMember = async (req, res) => {
  const newMemberFormData = req.body;
  userService.addNewMember(newMemberFormData, (error, response) => {
    if (error) {
      console.error('Internal Server Error(Adding Address):', error);
      res.status(500).json({ error: 'An error occurred at adding new address' });
    } else {
      res.status(200).json({ response })
    }
  })
}

const getUserAddresses = async (req, res) => {
  userService.getUserAddresses(req, (error, response) => {
    if (error){
      console.error('User addresses not being fetched', error);
      res.status(500).json({ error: "User addresses not being fetched" });
    } else {
      res.status(200).json({ addrs: response });
    }
  })
}

const getUserAltmob = async (req, res) => {
  userService.getUserAltmob(req, (error, response) => {
    if (error) {
      console.error('alt mob err', error);
      res.status(500).json({ error: "User addresses not being fetched" });
    } else {
      res.status(200).json({ altmob: response });
    }
  })
}

const getUserMembers = async (req, res) => {
  userService.getUserMembers(req, (error, response) => {
    if(error) {
      console.error("getting user members error", error);
      res.status(500).json({ error: "User " })
    } else {
      res.status(200).json({response});
    }
  })
}

module.exports = {
  loginOTP,
  verifyOTP,
  getUserInfo,
  getUserProfile,
  addNewAddress,
  addNewMember,
  getUserAddresses,
  getUserAltmob,
  getUserMembers
};