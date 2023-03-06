const express = require('express');
const router = express.Router();
const {getPlacesDetailsController,getPlacesDetailsByIdController} = require('../controllers/places');

router.get('/', getPlacesDetailsController);
router.get("/:id",getPlacesDetailsByIdController)

module.exports = router;