const adminTestsServices = require("../../services/adminServices/testsServices")

const getAllTests = (req, res) => {
    adminTestsServices.getAllTests((error, result) => {
        if (error) {
            console.error('Error fetching Tests data:', error);
            res.status(500).json({ error: 'An error occurred' });
        } else {
          res.status(200).json(result);
        }
    })
}

const getTests = (req, res) => {
    if ( req.query.packageId ) {
        const packageId = req.query.packageId;
        adminTestsServices.getTestsOfAPackage(packageId, (error, result) => {
            if (error) {
                console.error('Error fetching Tests data:', error);
                res.status(500).json({ error: 'An error occurred' });
            } else {
              res.status(200).json(result);
            }
        })
    } else if ( req.query.searchTerm ) {
        const searchTerm = req.query.searchTerm;
        adminTestsServices.getTestsofSearchTerm(searchTerm, (error, result) => {
            if (error) {
                console.error('Error fetching tests data by query:', error);
                res.status(500).json({error: 'An error occured'});
            } else {
                res.status(200).json(result);
            }
        })
    } else {
        getAllTests(req, res)
    }
}

module.exports = {
    getTests,
    getAllTests
}