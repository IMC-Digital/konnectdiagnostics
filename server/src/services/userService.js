const createpoolConnection = require("../../config/database");
const pool = createpoolConnection();
const axios = require('axios');
const bcrypt = require('bcrypt');
const salt = 10;

const getUser = (mobileNumber, callback) => {
  pool.query('SELECT * FROM users WHERE mobile_number = ?', [mobileNumber], (error, response) => {
    callback(error, response);
  })
}

const loginOTP = (number, callback) => {
  let digits = "0123456789";
  let OTP = "";
  for (let i = 0; i < 6; i++) {
      OTP += digits[Math.floor(Math.random() * 10)];
  }
  const sendOTP = async (num, otp) => {
    
    try{
      const API_KEY = 'A0c7c219e22a5f772085c95ceef54dd32';
      const method = 'sms';
      const MESSAGE = `${otp} is your one time password (OTP) for login, valid for 10 mins. - Konnect Diagnostics `;
      const sender = 'KIMDCK';
      const unicode = '1';
      const templateId = '1207170651663518023';
      
      const url = `http://sms.athentech.co.in/api/v4/?api_key=${API_KEY}&method=${method}&message=${MESSAGE}&to=${num}&sender=${sender}&unicode=${unicode}&template_id=${templateId}`;
      const response = await axios.get(url);
      // console.log(response);
      if (response.statusText === "OK"){
        // console.log(number+"asdf");
        // console.log("ok");
        callback(null, {Status: "OTP sent!", OTP: OTP});
      }
    }catch(error){console.log(error);}
  }
  
  pool.query('SELECT * FROM users WHERE mobile_number = ?', [number], (error, response) => {
    
    error && callback(error, null);
    
    if (response.length === 0) {
      bcrypt.hash(OTP.toString(), salt, (err, hash) => {
        if (err) return res.json({ "err for hashing password": err });
        pool.query('INSERT INTO users (mobile_number, otp) VALUES (?, ?)', [number, hash], (err2, result2) => {
          if (err2) {
            console.error('Error inserting mobile number to users table:', err2);
            res.status(500).json({ error: "Database error" });
          }
          sendOTP(number, OTP);
        });
      })
    } else {
      bcrypt.hash(OTP.toString(), salt, (err, hash) => {
        if (err) return res.json({ "err for hasing password": err });
        pool.query('UPDATE users SET otp = ? WHERE mobile_number = ?', [hash, number], (err3, result3) => {
          if (err3) {
            console.error('Error updating OTP in users table:', err3);
            if (err3.code === 'ECONNRESET') {
            } else {
              res.status(500).json({ error: "Database error" });
            }
          } else {
            sendOTP(number, OTP);
          }
        });
      })
    }
  });
}

const getUserProfile = (userId, callback) => {
  // console.log(userId);
  const query = "SELECT * FROM user_profile WHERE user_id = ?";
  pool.query(query, [userId], (error, response) => {
    callback(error, response)
  })
}

const addNewAddress = (newAddressFormData, callback) => {
  const { user_id, address_type, pincode, locality, address_name, address_line_1, address_line_2, googlemap, city, state } = newAddressFormData;
  const query = "INSERT INTO user_addresses (user_id, address_type, pincode, locality, address_name, address_line_1, address_line_2, googlemap, city, state) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
  const values = [user_id, address_type, pincode, locality, address_name, address_line_1, address_line_2, googlemap, city, state];

  pool.query(query, values, (error, response) => {
    callback(error, response)
  });
}

const addNewMember = (newMemberFormData, callback) => {
  const { userId, personTitle, fullName, date_of_birth, gender, relationship } = newMemberFormData;
  const query = "INSERT INTO user_members (user_id, person_title, fullname, date_of_birth, gender, relation ) VALUES (?, ?, ?, ?, ?, ?)";
  const values = [userId, personTitle, fullName, date_of_birth, gender, relationship];

  pool.query(query, values, (error, results) => {
    if (error) {
      console.error('Error adding member to database:', error);
      callback(error, null);
    } else {
      callback(null, { results });
    }
  });
}

const getUserAddresses = (req, callback) => {
  const { userId } = req.params;
  const query = "SELECT * FROM user_addresses WHERE user_id = ?";
  pool.query(query, [userId], (error, response) => {
    callback(error, response);
  })
}

const getUserAltmob = (req, callback) => {
  const uid = req.query.userid;
  const query = "SELECT * FROM user_profile WHERE user_id = ?";
  pool.query(query, [uid], (error, response) => {
    callback(error, response);
  })
}

const getUserMembers = (req, callback) => {
  const uid = req.query.userid;
  // callback(null, uid)
  const query = "SELECT * FROM user_members WHERE user_id = ?";
  pool.query(query, [uid], (error, response) => {
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
  getUserMembers,
  loginOTP
};