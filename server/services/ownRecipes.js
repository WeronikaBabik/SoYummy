const { Recipes } = require("../models/recipes");

const addOwnRecipe = async (body, userId) => {
  try {
    body.owner = userId;

    const newRecipe = await Recipes.create(body);
    return newRecipe;
  } catch (error) {
    console.error(error);
    return;
  }
};

const deleteOwnRecipe = async (owner, id) => {
  try {
    const result = Recipes.deleteOne({ _id: id, owner });

    if (!result) {
      return null;
    }
    return result;
  } catch (error) {
    console.error(error);
    return;
  }
};

const getOwnRecipe = async (owner) => {
  try {
    return await Recipes.find({ owner });
  } catch (e) {
    console.error(e);
  }
};

const getOwnRecipeById = async (id) => {
  try {
    const recipe = await Recipes.findById(id);
    const ingredients = JSON.parse(recipes.ingredients);
    recipe.ingredients = ingredients;
    return recipe;
  } catch (error) {
    console.error(error);
  }
};
module.exports = {
  addOwnRecipe,
  deleteOwnRecipe,
  getOwnRecipe,
  getOwnRecipeById,
};
