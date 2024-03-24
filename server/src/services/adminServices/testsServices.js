const createpoolConnection = require("../../../config/database");
const pool = createpoolConnection();

const getTestsOfAPackage = (packageId, callback) => {
    const query = `
        SELECT t.*
        FROM tests t
        JOIN tests_in_packages tip ON t.test_id = tip.test_id
        WHERE tip.package_id = ?;
    `;

    pool.query(query, [packageId], (error, result) => {
        callback(error, result);
    });
};

const getTestsofSearchTerm = (searchTerm, callback) => {
    const query = `SELECT DISTINCT * FROM tests WHERE test_name LIKE '%${searchTerm}%'`;
    pool.query(query, (error, results) => {
        callback(error, results)
    });
}


const getAllTests = (callback) => {
    const query = "SELECT * FROM tests";
    pool.query(query, (error, result) => {
        callback(error, result);
    });
};

module.exports = {
    getTestsOfAPackage,
    getTestsofSearchTerm,
    getAllTests
}