const { getAllCategoriesList } = require("../services/categoriesList");

const getAllCategoriesListHandler = async (req, res) => {
  try {
    const category = await getAllCategoriesList();
    console.log(category);
    return res.status(200).json(category);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Wystąpił błąd serwera." });
  }
};

module.exports = { getAllCategoriesListHandler };
