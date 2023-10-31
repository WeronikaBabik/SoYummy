const express = require("express");
const categoryRouter = express.Router();
const {
  getAllCategoriesListHandler,
} = require("../../controllers/categoriesList");

categoryRouter.get("/", getAllCategoriesListHandler);

module.exports = { categoryRouter };
