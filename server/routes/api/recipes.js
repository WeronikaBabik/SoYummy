const express = require("express");
const router = express.Router();
const { listRecipesHandler } = require("../../controllers/recipes");

router.get("/recipes", listRecipesHandler);

module.exports = router;
