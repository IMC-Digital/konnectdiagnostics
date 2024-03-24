const createpoolConnection = require("../../config/database");
const pool = createpoolConnection();

const getAllPackages = (callback) => {
    const query = "SELECT * FROM packages";
    pool.query(query, (error, result) => {
        callback(error, result);
    });
};

const getPackagesCatWise = (category, callback) => {
    const query = 'SELECT packages.* FROM packages JOIN packages_in_categories ON packages.package_id = packages_in_categories.package_id WHERE packages_in_categories.category_id = ?'
    pool.query(query, [category], (error, result) => {
        callback(error, result)
    })
}

module.exports = {
    getAllPackages,
    getPackagesCatWise
}