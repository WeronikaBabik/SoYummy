const express = require("express");
const { getPopularityHandler } = require("../../controllers/popularRecipe");
const popularRecipeRouter = express.Router();

const { authMiddleware } = require("../../auth/auth.middleware");

popularRecipeRouter.get("/", authMiddleware, getPopularityHandler);

module.exports = { popularRecipeRouter };
