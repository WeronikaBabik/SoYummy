const { Recipes } = require("../models/recipes");
const mongoose = require("mongoose");

const getAllRecipes = async () => {
  try {
    return await Recipes.find();
  } catch (e) {
    console.error(e);
  }
};

const getMainPageRecipes = async (MainPageCategory) => {
  try {
    return await Recipes.find({ category: MainPageCategory });
  } catch (e) {
    console.error(e);
  }
};

const getRecipesFromCategory = async (choosedCategory, page = 1) => {
  try {
    const currentRecipes = await Recipes.find({ category: choosedCategory });
    let b = Number(page) * 8 - 1;
    let a = b - 7;

    const arrayWithRecipes = [];
    for (let i = a; i <= b; i++) {
      if (currentRecipes[i]) {
        arrayWithRecipes.push(currentRecipes[i]);
      }
    }
    if (arrayWithRecipes.length === 0) {
      return null;
    }
    return arrayWithRecipes;
  } catch (e) {
    console.error(e);
    return;
  }
};

const getRecipesFromId = async (req) => {
  try {
    const { id } = req.params;
    console.log(id);

    const recipe = await Recipes.aggregate([
      {
        $match: {
          _id: new mongoose.Types.ObjectId(id),
        },
      },
      {
        $lookup: {
          from: "ingredients",
          localField: "ingredients.id",
          foreignField: "_id",
          as: "ingr_nfo",
        },
      },
      {
        $set: {
          ingredients: {
            $map: {
              input: "$ingredients",
              in: {
                $mergeObjects: [
                  "$$this",
                  {
                    $arrayElemAt: [
                      "$ingr_nfo",
                      {
                        $indexOfArray: ["$ingr_nfo._id", "$$this.id"],
                      },
                    ],
                  },
                ],
              },
            },
          },
        },
      },
      {
        $unset: ["ingr_nfo", "ingredients.id"],
      },
      {
        $project: {
          area: 0,
          thumb: 0,
          tags: 0,
          createdAt: 0,
          updatedAt: 0,
          "ingredients.t": 0,
          popularity: 0,
          category: 0,
          youtube: 0,
        },
      },
    ]);

    if (!recipe || recipe.length === 0) {
      console.log(`Recipe with id: ${id}  not found`);
    }
    return recipe;
  } catch (e) {
    console.error(e);
    return;
  }
};

module.exports = {
  getAllRecipes,
  getMainPageRecipes,
  getRecipesFromCategory,
  getRecipesFromId,
};
