const createOtpDbConnection = require("../../config/database");
const otpdb = createOtpDbConnection();

class UserService {
    static async addNewAddress(userData) {
      // Placeholder logic - You should implement your actual logic here
      console.log('Adding new address:', userData);
      return { message: 'Address added successfully!' };
    }
  }
  
  module.exports = UserService;
  