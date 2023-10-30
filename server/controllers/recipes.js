const { getAllRecipes } = require("../services/recipes");

const getAllRecipesHandler = async (req, res) => {
  try {
    const recipes = await getAllRecipes();
    console.log(recipes);
    return res.status(200).json(recipes);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Wystąpił błąd serwera." });
  }
};

module.exports = { getAllRecipesHandler };
