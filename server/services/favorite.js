const { Recipes } = require("../models/recipes");
const { User } = require("../models/user");

const mongoose = require("mongoose");

const addFavorite = async (owner, id) => {
  try {
    const oldBody = await getFavorite(owner);
    let popularity = await getPopularity(id);
    const oid = new mongoose.Types.ObjectId(id);
    const tempBody = oldBody.favorites.filter(
      (element) => !element.equals(oid)
    );

    if (oldBody.favorites.length === undefined) {
      oldBody.length = 0;
    }

    if (tempBody.length === oldBody.favorites.length) {
      oldBody.favorites.push(oid);

      const newBody = oldBody.favorites;

      if (popularity.popularity === null) {
        popularity.popularity = 1;
      } else {
        popularity.popularity++;
      }

      const updatedFavorites = await User.findByIdAndUpdate(
        owner,
        { favorites: newBody },
        {
          new: true,
        }
      );

      const updatedPopularity = await Recipes.findByIdAndUpdate(
        id,
        { popularity: popularity.popularity },
        {
          new: true,
        }
      );

      return updatedFavorites;
    }
    return null;
  } catch (error) {
    console.error(error);
    return;
  }
};

const deleteFavorite = async (owner, id) => {
  try {
    const oid = new mongoose.Types.ObjectId(id);
    const oldBody = await getFavorite(owner);
    const newBody = oldBody.favorites.filter((element) => !element.equals(oid));
    let popularity = await getPopularity(id);

    if (newBody.length !== oldBody.favorites.length) {
      popularity.popularity--;

      const updatedFavorites = await User.findByIdAndUpdate(
        owner,
        { favorites: newBody },
        {
          new: true,
        }
      );

      const updatedPopularity = await Recipes.findByIdAndUpdate(
        id,
        { popularity: popularity.popularity },
        {
          new: true,
        }
      );

      return updatedFavorites;
    }
    return null;
  } catch (error) {
    console.error(error);
    return;
  }
};

const getFavorite = async (owner) => {
  try {
    const result = await User.findOne({ _id: owner }, { _id: 0, favorites: 1 });
    console.log(result);
    return result;
  } catch (e) {
    console.error(e);
  }
};

const getPopularity = async (id) => {
  try {
    const result = await Recipes.findOne(
      { _id: id },
      { _id: 0, popularity: 1 }
    );
    console.log(result);
    return result;
  } catch (e) {
    console.error(e);
  }
};

module.exports = {
  addFavorite,
  deleteFavorite,
  getFavorite,
};
