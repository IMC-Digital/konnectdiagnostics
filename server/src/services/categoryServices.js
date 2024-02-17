const createOtpDbConnection = require("../../config/database");
const otpdb = createOtpDbConnection();

const getAllCategories = (callback) => {
    otpdb.query("SELECT * FROM categories", (error, result) => {
        callback(error, result)
    })
}

module.exports = {
    getAllCategories
}