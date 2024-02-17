const createOtpDbConnection = require("../../../config/database");
const otpdb = createOtpDbConnection();

const getAllPackages = (callback) => {
    otpdb.query("SELECT * FROM packages", (error, result) => {
        callback(error, result)
    })
}

module.exports = {
    getAllPackages
}