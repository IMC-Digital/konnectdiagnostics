const createpoolConnection = require("../../../config/database");
const pool = createpoolConnection();

const addtestInPackage = (testId, packageId, callback) => {
    pool.query("SELECT * FROM tests_in_packages WHERE test_id = ? AND package_id = ?", [testId, packageId], (error0, result0) => {
        if(!error0){
            if(result0.length === 0){
                pool.query("INSERT INTO tests_in_packages (test_id, package_id) VALUES (?,?)", [testId, packageId], (error, result) => {
                    callback(error, result)
                })
            }
        }
    })
}

module.exports = {
    addtestInPackage
}