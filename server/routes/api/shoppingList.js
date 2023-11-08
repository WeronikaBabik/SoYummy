const express = require("express");
const {
  getShoppingListHandler,
  deleteFromShoppingListHandler,
  addToShoppingListHandler,
} = require("../../controllers/shoppingList");
const { authMiddleware } = require("../../auth/auth.middleware");
const shoppingListRouter = express.Router();

shoppingListRouter.get("/list", authMiddleware, getShoppingListHandler);
shoppingListRouter.post("/", authMiddleware, addToShoppingListHandler);
shoppingListRouter.patch("/", authMiddleware, deleteFromShoppingListHandler);

module.exports = { shoppingListRouter };
