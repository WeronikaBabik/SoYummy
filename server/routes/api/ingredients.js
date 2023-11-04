const express = require("express");

const {
  getAllIngredientsHandler,
  searchByIngredient,
} = require("../../controllers/ingredients");

const { authMiddleware } = require("../../auth/auth.middleware");

const ingredientsRouter = express.Router();

ingredientsRouter.get("/", authMiddleware, searchByIngredient);
ingredientsRouter.get("/list", authMiddleware, getAllIngredientsHandler);

module.exports = { ingredientsRouter };
