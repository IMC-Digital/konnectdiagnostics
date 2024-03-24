const createpoolConnection = require("../../config/database");
const pool = createpoolConnection();

const getAllTests = (callback) => {
    const query = "SELECT * FROM tests";
    pool.query(query, (error, result) => {
        callback(error, result);
    });
};

const getTestsCatWise = (categoryId, callback) => {
    const query = 'SELECT tests.* FROM tests JOIN tests_in_categories ON tests.test_id = tests_in_categories.test_id WHERE tests_in_categories.category_id = ?';
    pool.query(query, [categoryId], (error, result) => {
        callback(error, result)
    })
}

const getTestsPckWise = (packageId, callback) => {
    const query = 'SELECT tests.* FROM tests JOIN tests_in_packages ON tests.test_id = tests_in_packages.test_id WHERE tests_in_packages.package_id = ?';
    pool.query(query, [packageId], (error, result) => {
        callback(error, result)
    })
}

const getTestsSrcWise = (term, callback) => {
    const query = `SELECT DISTINCT * FROM tests WHERE test_name LIKE '%${term}%'`;
    pool.query(query, (error, result) => {
        callback(error, result)
    })
}

const getPopTests = (codes, callback) => {
    if (!Array.isArray(codes)) {
        return res.status(400).json({ error: 'Invalid input' });
      }
    
    const query = `SELECT * FROM tests WHERE test_name IN (?)`;
    
    pool.query(query, [codes], (error, response) => {
        callback(error, response);
    });
}

module.exports = {
    getAllTests,
    getTestsCatWise,
    getTestsPckWise,
    getTestsSrcWise,
    getPopTests
}