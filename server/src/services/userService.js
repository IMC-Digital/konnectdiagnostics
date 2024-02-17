const createOtpDbConnection = require("../../config/database");
const otpdb = createOtpDbConnection();

const getUser  = (mobileNumber, callback) => {
  otpdb.query('SELECT * FROM users WHERE mobile_number = ?', [mobileNumber], (error, response) => {
    callback(error, response);
  })
}

const getUserProfile = (userId, callback) => {
  const query = "SELECT * FROM user_profile WHERE user_id = ?";
  otpdb.query(query, [userId], (error, response) => {
    callback(error, response)
  })
}

const addNewAddress = (newAddressFormData, callback) => {
  const { user_id, address_type, pincode, locality, address_name, address_line_1, address_line_2, googlemap, city, state } = newAddressFormData;
  const query = "INSERT INTO user_addresses (user_id, address_type, pincode, locality, address_name, address_line_1, address_line_2, googlemap, city, state) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
  const values = [user_id, address_type, pincode, locality, address_name, address_line_1, address_line_2, googlemap, city, state];

  otpdb.query(query, values, (error, response) => {
    callback(error, response)
  });
}

const addNewMember = (newMemberFormData, callback) => {
  const { userId, personTitle, fullName, date_of_birth, gender, relationship } = newMemberFormData;
  const query = "INSERT INTO user_members (user_id, person_title, fullname, date_of_birth, gender, relation ) VALUES (?, ?, ?, ?, ?, ?)";
  const values = [ userId, personTitle, fullName, date_of_birth, gender, relationship ];

  otpdb.query(query, values, (error, results) => {
    if (error) {
      console.error('Error adding member to database:', error);
      callback(error, null);
    } else {
      callback(null, { results });
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

const getUserAltmob = (req, callback) => {
  const uid = req.query.userid;
  const query = "SELECT * FROM user_profile WHERE user_id = ?";
  otpdb.query(query, [uid], (error, response) => {
    callback(error, response);
  })
}

const getUserMembers = (req, callback) => {
  const uid = req.query.userid;
  // callback(null, uid)
  const query = "SELECT * FROM user_members WHERE user_id = ?";
  otpdb.query(query, [uid], (error, response) => {
    callback(error, response)
  })
}
  
module.exports = {
  getUser,
  getUserProfile,
  addNewAddress,
  addNewMember,
  getUserAddresses,
  getUserAltmob,
  getUserMembers
};