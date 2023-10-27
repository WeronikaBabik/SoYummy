const { listRecipes } = require("../services/recipes");

const listRecipesHandler = async (req, res) => {
  try {
    const recipe = await listRecipes();
    console.log(recipe);
    return res.status(200).json(recipe);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Wystąpił błąd serwera." });
  }
};

model.exports = listRecipesHandler;
