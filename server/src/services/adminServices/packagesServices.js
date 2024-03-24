const createpoolConnection = require("../../../config/database");
const pool = createpoolConnection();

const getAllPackages = (callback) => {
    pool.query("SELECT * FROM packages", (error, result) => {
        callback(error, result)
    })
}

module.exports = {
    getAllPackages
}