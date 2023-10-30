const { getAllIngredients } = require("../services/ingredients");

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

module.exports = { getAllIngredientsHandler };
