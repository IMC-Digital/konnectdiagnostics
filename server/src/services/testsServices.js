const createOtpDbConnection = require("../../config/database");
const otpdb = createOtpDbConnection();

const getAllTests = (callback) => {
    const query = "SELECT * FROM tests";
    otpdb.query(query, (error, result) => {
        callback(error, result);
    });
};

const getTestsCatWise = (categoryId, callback) => {
    const query = 'SELECT tests.* FROM tests JOIN tests_in_categories ON tests.test_id = tests_in_categories.test_id WHERE tests_in_categories.category_id = ?';
    otpdb.query(query, [categoryId], (error, result) => {
        callback(error, result)
    })
}

const getTestsPckWise = (packageId, callback) => {
    const query = 'SELECT tests.* FROM tests JOIN tests_in_packages ON tests.test_id = tests_in_packages.test_id WHERE tests_in_packages.package_id = ?';
    otpdb.query(query, [packageId], (error, result) => {
        callback(error, result)
    })
}

const getTestsSrcWise = (term, callback) => {
    const query = `SELECT DISTINCT * FROM tests WHERE test_name LIKE '%${term}%'`;
    otpdb.query(query, (error, result) => {
        callback(error, result)
    })
}

module.exports = {
    getAllTests,
    getTestsCatWise,
    getTestsPckWise,
    getTestsSrcWise
}