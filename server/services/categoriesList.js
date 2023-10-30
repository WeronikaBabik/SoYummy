const { CategoriesList } = require("../models/categorieslist");

const getAllCategoriesList = async () => {
  try {
    return await CategoriesList.find();
  } catch (e) {
    console.error(e);
  }
};

module.exports = { getAllCategoriesList };
