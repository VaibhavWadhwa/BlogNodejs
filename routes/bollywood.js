const express = require('express');
const router = express.Router();
const {getBollywoodDetailsController,getBollywoodDetailsByIdController} = require('../controllers/bollywood');

router.get('/', getBollywoodDetailsController);
router.get("/:id",getBollywoodDetailsByIdController)

module.exports = router;