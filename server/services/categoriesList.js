const { CategoriesList } = require("../models/categorieslist");

const getAllCategories = async () => {
  try {
    return await CategoriesList.find({}, { title: 1, _id: 0 }).sort({
      title: 1,
    });
  } catch (e) {
    console.error(e);
  }
};

module.exports = { getAllCategories };
