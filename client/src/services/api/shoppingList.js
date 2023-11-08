import axios from "axios";
axios.defaults.baseURL = "http://localhost:3001/api";

export const addToShoppingListFromRecipe = async (body) => {
  try {
    const res = await axios.post(`/shopping-list`, body);
    return res.data;
  } catch (error) {
    console.error(error.message);
  }
};

export const deleteShoppingItemFromRecipe = async (body) => {
  try {
    const item = await axios.patch(`/shopping-list`, body);
    return item.data;
  } catch (error) {
    console.error(error.message);
  }
};

export const deleteShoppingList = async (body) => {
  try {
    const res = await axios.patch(`/shopping-list`, body);
    return res.data;
  } catch (error) {
    console.log(error.message);
    return null;
  }
};
