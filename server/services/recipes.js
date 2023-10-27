const { Recipes } = require("../models/recipes");

const listRecipes = async () => {
  try {
    return await Recipes.find();
  } catch (e) {
    console.error(e);
  }
};

module.exports = listRecipes;
