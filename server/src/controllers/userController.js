const { response } = require('express');
const UserService = require('../services/userService');

const getUserInfo = async (req, res) => {
    try {
      res.json({ Status: "ok", userid: req.user_id, cart_id: req.cart_id });
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
}

const addNewAddress = async (req, res) => {
  const newAddressFormData = req.body;
  UserService.addNewMember(newAddressFormData, (error, response) => {
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
  UserService.addNewMember(newMemberFormData, (error, response) => {
    if (error) {
      console.error('Internal Server Error(Adding Address):', error);
      res.status(500).json({ error: 'An error occurred at adding new address' });
    } else {
      res.status(200).json({ response })
    }
  })
}

const getUserAddresses = async (req, res) => {
  UserService.getUserAddresses(req, (error, response) => {
    if (error){
      console.error('User addresses not being fetched', error);
      res.status(500).json({ error: "User addresses not being fetched" });
    } else {
      res.status(200).json({ addrs: response });
    }
  })
}

const getUserAltmob = async (req, res) => {
  UserService.getUserAltmob(req, (error, response) => {
    if (error) {
      console.error('alt mob err', error);
      res.status(500).json({ error: "User addresses not being fetched" });
    } else {
      res.status(200).json({ altmob: response });
    }
  })
}

module.exports = {
    getUserInfo,
    addNewAddress,
    addNewMember,
    getUserAddresses,
    getUserAltmob
};