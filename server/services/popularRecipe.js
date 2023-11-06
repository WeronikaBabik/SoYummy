const { Recipes } = require("../models/recipes");

const getPopularity = async (owner) => {
  try {
    const result = await Recipes.find({
      owner,
    }).gt("popularity", 2);
    console.log(result);
    return result;
  } catch (error) {
    console.error(error);
    return;
  }
};

module.exports = {
  getPopularity,
};
