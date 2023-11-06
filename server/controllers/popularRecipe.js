const { getPopularity } = require("../services/popularRecipe");

const getPopularityHandler = async (req, res, next) => {
  try {
    const owner = req.userId;
    const popularRecipes = await getPopularity(owner);

    if (popularRecipes.length === 0) {
      return res
        .status(404)
        .json({ message: "Nie ma żanych popularnych przepisów. Jeszcze ;)" });
    }

    return res.status(200).json({ popularRecipes });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Wystąpił błąd serwera." });
  }
};

module.exports = {
  getPopularityHandler,
};
