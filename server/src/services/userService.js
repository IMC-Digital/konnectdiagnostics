const { response } = require("express");
const createOtpDbConnection = require("../../config/database");
const otpdb = createOtpDbConnection();

const addNewAddress = (newAddressFormData, callback) => {
  const { user_id, address_type, pincode, locality, address_name, address_line_1, address_line_2, googlemap, city, state } = newAddressFormData;
  const query = "INSERT INTO user_addresses (user_id, address_type, pincode, locality, address_name, address_line_1, address_line_2, googlemap, city, state) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
  const values = [user_id, address_type, pincode, locality, address_name, address_line_1, address_line_2, googlemap, city, state];

  otpdb.query(query, values, (error, results) => {
    if (error) {
      console.error('Error adding address to database:', error);
      callback(error, null);
    } else {
      // console.log('Address added to database:', results);
      callback(null, { message: 'Address added successfully!' });
    }
  });
}

const getUserAddresses = (req, callback) => {
  const uid = req.query.userid;
  const query = "SELECT * FROM user_addresses WHERE user_id = ?";
  otpdb.query(query, [uid], (error, response) => {
    callback(error, response);
  })
} 
  
module.exports = {
  addNewAddress,
  getUserAddresses
};