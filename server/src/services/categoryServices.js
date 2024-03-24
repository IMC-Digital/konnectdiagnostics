const createpoolConnection = require("../../config/database");
const pool = createpoolConnection();

const getAllCategories = (callback) => {
    pool.query("SELECT * FROM categories", (error, result) => {
        callback(error, result)
    })
}

module.exports = {
    getAllCategories
}