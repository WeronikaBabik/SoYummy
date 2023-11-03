const { Recipes } = require("../models/recipes");

const getAllRecipes = async () => {
  try {
    return await Recipes.find();
  } catch (e) {
    console.error(e);
  }
};

const getMainPageRecipes = async (MainPageCategory) => {
  try {
    return await Recipes.find({ category: MainPageCategory });
  } catch (e) {
    console.error(e);
  }
};

const getRecipesFromCategory = async (choosedCategory, page = 1) => {
  try {
    const currentRecipes = await Recipes.find({ category: choosedCategory });
    let b = Number(page) * 8 - 1;
    let a = b - 7;

    const arrayWithRecipes = [];
    for (let i = a; i <= b; i++) {
      if (currentRecipes[i]) {
        arrayWithRecipes.push(currentRecipes[i]);
      }
    }
    if (arrayWithRecipes.length === 0) {
      return null;
    }
    return arrayWithRecipes;
  } catch (e) {
    console.error(e);
    return;
  }
};

const getRecipesFromId = async (choosedId) => {
  try {
    const currentRecipe = await Recipes.find({ _id: choosedId });
    if (!currentRecipe) {
      return null;
    }
    return currentRecipe;
  } catch (e) {
    console.error(e);
    return;
  }
};

module.exports = {
  getAllRecipes,
  getMainPageRecipes,
  getRecipesFromCategory,
  getRecipesFromId,
};
