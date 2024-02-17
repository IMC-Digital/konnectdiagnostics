const express = require('express');
const router = express.Router();
const adminTestsController = require("../controllers/adminControllers/testsController");
const adminPackagesController = require("../controllers/adminControllers/packageController");
const adminCategoryController = require("../controllers/categoryController");
const packageTestsCont = require("../controllers/adminControllers/packageTestsController")

router.get('/', (req, res) => {
    res.send("adming route working");
})

router.get('/get-all-tests', adminTestsController.getAllTests );
router.get('/get-tests', adminTestsController.getTests );
router.get('/get-all-packages', adminPackagesController.getAllPackages);
router.get('/get-all-categories', adminCategoryController.getAllCategories);

// package tests routes
router.post('/add-test-into-package', packageTestsCont.addtestInPackage)

module.exports = router;