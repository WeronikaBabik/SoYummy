const { AllIngredients } = require("../services/categoriesList");

const AllIngredientsHandler = async (req, res) => {
  try {
    const ingredients = await AllIngredients();
    console.log(ingredients);
    return res.status(200).json(ingredients);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Wystąpił błąd serwera." });
  }
};

model.exports = AllCategorylistHandler;
