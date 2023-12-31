const Jimp = require("jimp");

const {
  addOwnRecipe,
  deleteOwnRecipe,
  getOwnRecipe,
  getOwnRecipeById,
} = require("../services/ownRecipes");
const { Recipes } = require("../models/recipes");

const addOwnRecipeHandler = async (req, res, next) => {
  try {
    const owner = req.userId;
    const newRecipe = await addOwnRecipe(req.body, owner);

    return res.status(200).json(newRecipe);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Wystąpił błąd serwera." });
  }
};

const deleteOwnRecipeHandler = async (req, res, next) => {
  try {
    console.log(req.userId);
    const owner = req.userId;
    const { recipeId } = req.body;
    const response = await deleteOwnRecipe(owner, recipeId);

    if (response === null) {
      return res.status(404).json({
        message: "Nie znaleźliśmy podanego przepisu",
      });
    }

    return res
      .status(200)
      .json({ message: "pomyślnie usunięto ten przepis", recipe: response });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Wystąpił błąd serwera." });
  }
};

const getOwnRecipeHandler = async (req, res, next) => {
  try {
    const owner = req.userId;
    // const recipes = await getOwnRecipe(owner);
    const recipes = await Recipes.find({ owner });
    // if (recipes.length === 0) {
    //   return res.status(404).json({
    //     message: "You have no Recipes",
    //   });
    // }
    return res.status(200).json({
      recipes,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Wystąpił błąd serwera." });
  }
};

const imgEdit = async (oldPath, newPath) => {
  Jimp.read(oldPath)
    .then((img) => {
      return img.resize(250, 250).write(newPath);
    })
    .catch((err) => {
      console.error(err);
    });
};

const getOwnRecipeByIdHandler = async (req, res) => {
  try {
    const { recipeId } = req.params;
    const recipe = await getOwnRecipeById(recipeId);
    res.status(200).json({ recipe });
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  addOwnRecipeHandler,
  deleteOwnRecipeHandler,
  getOwnRecipeHandler,
  imgEdit,
  getOwnRecipeByIdHandler,
};
