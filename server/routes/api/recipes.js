const express = require("express");
const { authMiddleware } = require("../../auth/auth.middleware");

const recipesController = require("../../controllers/recipes");

const recipesRouter = express.Router();

recipesRouter.get("/", authMiddleware, recipesController.getAllRecipesHandler);

recipesRouter.get(
  "/category-list",
  authMiddleware,
  recipesController.getCategoryListHandler
);

recipesRouter.get(
  "/main-page",
  authMiddleware,
  recipesController.getMainPageRecipesHandler
);

recipesRouter.get(
  "/:id",
  authMiddleware,
  recipesController.getRecipesFromIdHandler
);

recipesRouter.get(
  "/:category",
  authMiddleware,
  recipesController.getRecipesFromCategoryHandler
);

module.exports = { recipesRouter };
