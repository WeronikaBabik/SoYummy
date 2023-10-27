const { AllCategorylist } = require("../services/categoriesList");

const AllCategorylistHandler = async (req, res) => {
  try {
    const categorylist = await AllCategorylist();
    console.log(categorylist);
    return res.status(200).json(categorylist);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Wystąpił błąd serwera." });
  }
};

model.exports = AllCategorylistHandler;
