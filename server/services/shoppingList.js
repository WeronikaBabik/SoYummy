const { Ingredients } = require("../models/ingredients");
const { ShoppingList } = require("../models/shoppingList");
const { User } = require("../models/user");

const getShoppingList = async (id) => {
  try {
    const result = await User.find({ id });
    return result;
  } catch (error) {
    console.error(error);
  }
};

const addToShoppingList = async (owner, ingredient) => {
  try {
    const { iid, number } = ingredient;
    const ingredientId = await Ingredients.findById(iid);

    if (!ingredientId) {
      return null;
    }

    const { ttl, thb } = ingredientId;
    const addToShoppingList = {
      iid,
      ttl,
      thb,
      number,
      owner,
    };

    const result = await ShoppingList.create(addToShoppingList);
    return result;
  } catch (error) {
    console.error(error);
  }
};

const deleteFromShoppingList = async (owner, iid) => {
  try {
    const result = await ShoppingList.findOneAndDelete({
      owner,
      iid,
    });
    return result;
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  getShoppingList,
  addToShoppingList,
  deleteFromShoppingList,
};
