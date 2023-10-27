const { Ingredients } = require("../models/ingredients");

const AllIngredients = async () => {
  try {
    return await Ingredients.find();
  } catch (e) {
    console.error(e);
  }
};

module.exports = AllIngredients;
