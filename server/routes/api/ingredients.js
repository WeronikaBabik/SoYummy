const express = require("express");

const {
  getAllIngredientsHandler,
  searchByIngredient,
  getIngredientsHandler,
} = require("../../controllers/ingredients");

const { authMiddleware } = require("../../auth/auth.middleware");

const ingredientsRouter = express.Router();

ingredientsRouter.get("/", authMiddleware, searchByIngredient);
ingredientsRouter.get("/list", authMiddleware, getAllIngredientsHandler);
ingredientsRouter.get("/get", authMiddleware, getIngredientsHandler);

module.exports = { ingredientsRouter };
