const createOtpDbConnection = require("../../../config/database");
const otpdb = createOtpDbConnection();

const getTestsOfAPackage = (packageId, callback) => {
    const query = `
        SELECT t.*
        FROM tests t
        JOIN tests_in_packages tip ON t.test_id = tip.test_id
        WHERE tip.package_id = ?;
    `;

    otpdb.query(query, [packageId], (error, result) => {
        callback(error, result);
    });
};

const getTestsofSearchTerm = (searchTerm, callback) => {
    const query = `SELECT DISTINCT * FROM tests WHERE test_name LIKE '%${searchTerm}%'`;
    otpdb.query(query, (error, results) => {
        callback(error, results)
    });
}


const getAllTests = (callback) => {
    const query = "SELECT * FROM tests";
    otpdb.query(query, (error, result) => {
        callback(error, result);
    });
};

module.exports = {
    getTestsOfAPackage,
    getTestsofSearchTerm,
    getAllTests
}