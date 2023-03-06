const express = require('express');
const router = express.Router();
const {getBannerDetailsController,getBannerDetailsByIdController} = require('../controllers/banner');

router.get('/', getBannerDetailsController);
router.get("/:id",getBannerDetailsByIdController)

module.exports = router;