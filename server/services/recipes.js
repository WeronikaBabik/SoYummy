const { Recipes } = require("../models/recipes");

const getAllRecipes = async () => {
  try {
    return await Recipes.find();
  } catch (e) {
    console.error(e);
  }
};

module.exports = { getAllRecipes };
