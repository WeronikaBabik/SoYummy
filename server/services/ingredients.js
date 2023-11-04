const { default: mongoose } = require("mongoose");
const { Ingredients } = require("../models/ingredients");
const { Recipes } = require("../models/recipes");

const getAllIngredients = async () => {
  try {
    return await Ingredients.find();
  } catch (e) {
    console.error(e);
  }
};

const getRecipesByIngredient = async (ingredient = "Onions") => {
  try {
    const ingredientDoc = await Ingredients.findOne({ ttl: ingredient });
    console.log(ingredientDoc.id);

    const recipes = await Recipes.find({
      "ingredients.id": new mongoose.Types.ObjectId(ingredientDoc),
    });

    return recipes;
  } catch (e) {
    console.error(e);
  }
};

module.exports = { getAllIngredients, getRecipesByIngredient };
