const createpoolConnection = require("../../config/database");
const pool = createpoolConnection();

const getAllClinicsData = (callback) => {
    const query = "SELECT * FROM clinics";
    pool.query(query, (error, response) => {
        callback(error, response);
    });
};

const getClinicsData = (req, callback) => {
    const searchTerm = req.query.q;
    const query = `SELECT * FROM clinics WHERE name LIKE ? OR area LIKE ? OR city LIKE ?`;
    const searchValue = `%${searchTerm}%`;
    pool.query(query, [searchValue, searchValue, searchValue], (error, clinicsData) => {
        callback(error, clinicsData)
    });
}

const getClinicsDataByPin = (req, callback) => {
    const searchTerm = req.query.q;
    const query = `SELECT * FROM clinics WHERE pincode = ?`;
    pool.query(query, [searchTerm], (error, clinicsData) => {
        if (clinicsData.length > 0) {
            callback(error, { clinicsData });
        } else {
            const nearestPincodeQuery = `SELECT * FROM clinics ORDER BY ABS(pincode - ?) LIMIT 3`;
            pool.query(nearestPincodeQuery, [searchTerm], (error, nearestCenters) => {
                callback(error, { nearestCenters });
            });
        }
    });
};

module.exports = {
    getAllClinicsData,
    getClinicsData,
    getClinicsDataByPin
};
