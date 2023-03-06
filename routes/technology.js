const express = require('express');
const router = express.Router();
const {getTechnologyDetailsController,getTechnologyDetailsByIdController} = require('../controllers/Technology');

router.get('/', getTechnologyDetailsController);
router.get("/:id",getTechnologyDetailsByIdController)

module.exports = router;