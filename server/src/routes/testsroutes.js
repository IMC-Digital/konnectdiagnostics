const express = require('express');
const router = express.Router();
const testsController = require("../controllers/testsController");

router.get('/get-tests', testsController.getAllTests)
router.get('/category/:categoryId', testsController.getTestsCatWise);
router.get('/package/:packageId', testsController.getTestsPckWise);
router.get('/search/:term', testsController.getTestsSrcWise);
router.get('/getpoptests/', testsController.getPopTests);


module.exports = router;