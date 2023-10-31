const express = require("express");

const { getAllIngredientsHandler } = require("../../controllers/ingredients");

const ingredientsRouter = express.Router();

ingredientsRouter.get("/", getAllIngredientsHandler);

module.exports = { ingredientsRouter };
