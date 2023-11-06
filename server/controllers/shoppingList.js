const { Ingredients } = require("../models/ingredients");
const { Recipes } = require("../models/recipes");
const { ShoppingList } = require("../models/shoppingList");
const { User } = require("../models/user");
const {
  getShoppingList,
  addToShoppingList,
  deleteFromShoppingList,
} = require("../services/shoppingList");

const getShoppingListHandler = async (req, res, next) => {
  try {
    const owner = req.userId;
    //const user = await User.findOne({ owner });
    // const shoppingList = await getShoppingList(user);
    const shoppingList = await ShoppingList.find({ owner });
    res.status(200).json({
      shoppingList,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Wystąpił błąd serwera." });
  }
};

const addToShoppingListHandler = async (req, res, next) => {
  try {
    const userId = req.userId;
    const owner = await User.findOne({ _id: userId });
    const { iid, number } = req.body;
    const ingredientId = await Ingredients.findById(iid);
    const { ttl, thb } = ingredientId;
    const addToShoppingList = {
      iid,
      ttl,
      thb,
      number,
      owner,
    };
    // const shoppingList = await addToShoppingList(user, ingredient);
    const shoppingList = await ShoppingList.create(addToShoppingList);
    if (!shoppingList) {
      return res.status(404).json({
        message: "There is no such ingredient",
      });
    }
    res.status(201).json({
      shoppingList,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Wystąpił błąd serwera." });
  }
};

const deleteFromShoppingListHandler = async (req, res, next) => {
  try {
    const owner = req.userId;
    const { iid } = req.body;
    const result = await deleteFromShoppingList(owner, iid);
    if (!result) {
      return res.status(404).json({
        message: "There is nothing to delete",
      });
    }
    res.status(204).json({ message: "Ingredient was deleted" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Wystąpił błąd serwera." });
  }
};

module.exports = {
  getShoppingListHandler,
  addToShoppingListHandler,
  deleteFromShoppingListHandler,
};
