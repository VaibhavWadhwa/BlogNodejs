const express = require('express');
const router = express.Router();
const {getFitnessDetailsController,getFitnessDetailsByIdController} = require('../controllers/fitness');

router.get('/', getFitnessDetailsController);
router.get("/:id",getFitnessDetailsByIdController)

module.exports = router;