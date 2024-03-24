const testsServices = require('../services/testsServices')

const getAllTests = (req, res) => {
    testsServices.getAllTests((error, response) => {
        if (error) {
          console.error('Error fetching tests data:', error);
          res.status(500).json({ error: 'An error occurred' });
        } else {
          res.status(200).json(response);
        }
    });
}

const getTestsCatWise = (req, res) => {
  const { categoryId } = req.params;
  testsServices.getTestsCatWise(categoryId, (error, response) => {
    if(error) {
      console.error('Err fetching tests category wise');
      res.status(500).json({ error: "Err(test category query)" });
    } else {
      res.status(200).json(response);
    }
  })
}

const getTestsPckWise = (req, res) => {
  const { packageId } = req.params;
  testsServices.getTestsPckWise(packageId, (error, response) => {
    if(error) {
      console.error('Err fetching tests package wise', error);
      res.status(500).json({ error: "Err(test packages query)" });
    } else {
      res.status(200).json(response);
    }
  })
}

const getTestsSrcWise = (req, res) => {
  const { term } = req.params;
  testsServices.getTestsSrcWise(term, (error, response) => {
    if(error) {
      console.error('Err fetching tests package wise', error);
      res.status(500).json({ error: "Err(test packages query)" });
    } else {
      res.status(200).json(response);
    }
  })
}

const getPopTests = (req, res) => {
  const codes = req.query.codes;
  testsServices.getPopTests(codes, (error, response) => {
    if(error) {
      console.error('Err fetching tests package wise', error);
      res.status(500).json({ error: "Err(test packages query)" });
    } else {
      res.status(200).json(response);
    }
  })
}

module.exports = {
    getAllTests,
    getTestsCatWise,
    getTestsPckWise,
    getTestsSrcWise,
    getPopTests
}