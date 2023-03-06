const express = require('express');
const router = express.Router();
const {getHollywoodDetailsController,getHollywoodDetailsByIdController} = require('../controllers/hollywood');

router.get('/', getHollywoodDetailsController);
router.get("/:id",getHollywoodDetailsByIdController)

module.exports = router;