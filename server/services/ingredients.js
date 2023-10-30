const { Ingredients } = require("../models/ingredients");

const getAllIngredients = async () => {
  try {
    return await Ingredients.find();
  } catch (e) {
    console.error(e);
  }
};

module.exports = { getAllIngredients };
