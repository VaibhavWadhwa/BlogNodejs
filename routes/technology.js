const express = require('express');
const router = express.Router();
const {getTechnologyDetailsController,getTechnologyDetailsByIdController} = require('../controllers/technology');

router.get('/', getTechnologyDetailsController);
router.get("/:id",getTechnologyDetailsByIdController)

module.exports = router;
