const { Ingredients } = require("../models/ingredients");
const { Recipes } = require("../models/recipes");
const {
  getAllIngredients,
  getIngredients,
} = require("../services/ingredients");

const getAllIngredientsHandler = async (req, res) => {
  try {
    const ingredients = await getAllIngredients();
    console.log(ingredients);
    return res.status(200).json(ingredients);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Wystąpił błąd serwera." });
  }
};

const searchByIngredient = async (req, res) => {
  try {
    const { ingredient } = req.body;
    const listOfSearches = await getRecipesByIngredient(ingredient);
    // console.log(listOfSearches);
    if (listOfSearches === null) {
      return res.status(404).json({
        message:
          "Nie znaleźliśmy żadnych przepisów które pasują do twojego opisu",
      });
    }
    // console.log(listOfSearches.length);
    return res.status(200).json(listOfSearches);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Wystąpił błąd serwera." });
  }
};

const getIngredientsHandler = async (req, res) => {
  try {
    const result = getIngredients();
    res.status(200).json({ result });
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  getAllIngredientsHandler,
  searchByIngredient,
  getIngredients,
  getIngredientsHandler,
};
