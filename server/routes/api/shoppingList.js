const express = require("express");
const {
  getShoppingListHandler,
  deleteFromShoppingListHandler,
  addToShoppingListHandler,
} = require("../../controllers/shoppingList");
const { authMiddleware } = require("../../auth/auth.middleware");
const shoppingListRouter = express.Router();


shoppingListRouter.get("/list", authMiddleware, getShoppingListHandler);
shoppingListRouter.post("/add", authMiddleware, addToShoppingListHandler);
// shoppingListRouter.delete("/remove-ingredient", authMiddleware, deleteFromShoppingListHandler);

module.exports = { shoppingListRouter };
