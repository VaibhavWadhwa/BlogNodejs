const express = require('express');
const router = express.Router();
const {getFoodDetailsController,getFoodDetailsByIdController} = require('../controllers/food');

router.get('/', getFoodDetailsController);
router.get("/:id",getFoodDetailsByIdController)

module.exports = router;