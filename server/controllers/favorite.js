const {
  addFavorite,
  deleteFavorite,
  getFavorite,
} = require("../services/favorite");

const addFavoriteHandler = async (req, res, next) => {
  try {
    const owner = req.userId;
    const { idOfFavorite } = req.body;
    const response = await addFavorite(owner, idOfFavorite);

    if (!response) {
      return res.status(500).json({
        message: "Something wen Wrong",
      });
    }

    return res.status(200).json(response);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Wystąpił błąd serwera." });
  }
};

const deleteFavoriteHandler = async (req, res, next) => {
  try {
    const owner = req.userId;
    const { idOfFavorite } = req.body;
    const response = await deleteFavorite(owner, idOfFavorite);

    if (!response) {
      return res.status(500).json({
        message: "Something wen Wrong",
      });
    }

    return res.status(200).json(response);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Wystąpił błąd serwera." });
  }
};

const getFavoriteHandler = async (req, res, next) => {
  try {
    const owner = req.userId;
    const favoriteList = await getFavorite(owner);

    if (favoriteList.length === 0) {
      return res.status(404).json({
        message: "You have no Favorites",
      });
    }

    return res.status(200).json(favoriteList);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Wystąpił błąd serwera." });
  }
};

module.exports = {
  addFavoriteHandler,
  deleteFavoriteHandler,
  getFavoriteHandler,
};
