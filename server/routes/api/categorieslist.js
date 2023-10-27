const express = require("express");
const router = express.Router();
const { AllCategorylistHandler } = require("../../controllers/categoriesList");

router.get("/category", AllCategorylistHandler);

module.exports = router;
