const { Categorylist } = require("../models/categorieslist");

const AllCategorylist = async () => {
  try {
    return await Categorylist.find();
  } catch (e) {
    console.error(e);
  }
};

module.exports = AllCategorylist;
