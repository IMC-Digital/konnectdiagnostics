const packagesServices = require('../services/packagesServices');

const getAllPackages = (req, res) => {
    packagesServices.getAllPackages((error, response) => {
        if (error) {
          console.error('Error fetching packages data:', error);
          res.status(500).json({ error: 'An error occurred' });
        } else {
          res.status(200).json(response);
        }
    });
}

const getPackagesCatWise = (req, res) => {
  const { category } = req.params;
  packagesServices.getPackagesCatWise(category, (error, response) => {
    if(error) {
      console.error('Err fetching tests category wise');
      res.status(500).json({ error: "Err(test category query)" });
    } else {
      res.status(200).json(response);
    }
  })
}

module.exports = {
    getAllPackages,
    getPackagesCatWise
}