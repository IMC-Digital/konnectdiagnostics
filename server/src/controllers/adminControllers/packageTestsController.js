const packageTestsServices = require("../../services/adminServices/packageTestsServices");

const addtestInPackage = (req, res) => {
    const { testId, packageId } = req.body.params;
    packageTestsServices.addtestInPackage(testId, packageId, (error, result) => {
        if (error) {
            console.error('Error adding test into package:', error);
            res.status(500).json({ error: 'An error occurred' });
        } else {
          res.status(200).json(result);
        }
    })
}

module.exports = {
    addtestInPackage
}