const express = require("express");

const recipesController = require("../../controllers/recipes");

const recipesRouter = express.Router();

recipesRouter.get("/", recipesController.getAllRecipesHandler);

module.exports = { recipesRouter };
