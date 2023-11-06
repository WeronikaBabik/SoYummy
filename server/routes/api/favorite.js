const express = require("express");

const {
  addFavoriteHandler,
  deleteFavoriteHandler,
  getFavoriteHandler,
} = require("../../controllers/favorite");

const { authMiddleware } = require("../../auth/auth.middleware");

const favoriteRouter = express.Router();

favoriteRouter.get("/", authMiddleware, getFavoriteHandler);

favoriteRouter.put("/", authMiddleware, addFavoriteHandler);

favoriteRouter.delete("/", authMiddleware, deleteFavoriteHandler);

module.exports = { favoriteRouter };
