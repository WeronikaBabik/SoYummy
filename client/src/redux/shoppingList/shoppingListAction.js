import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getShoppingList = createAsyncThunk(
  "shopping-list/get-list",
  async (_, thunkAPI) => {
    try {
      const res = await axios.get(`shopping-list/get-list`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addToShoppingList = createAsyncThunk(
  "shopping-list/add-ingredient",
  async ({ recipeId, ingredientId }, thunkAPI) => {
    try {
      const res = await axios.post(
        `shopping-list/add-ingredient?recipeId=${recipeId}&ingredientId=${ingredientId}`
      );
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteFromShoppingList = createAsyncThunk(
  "shopping-list/remove-ingredient",
  async (id, thunkAPI) => {
    try {
      const res = await axios.delete(
        `shopping-list/remove-ingredient/?ingredientId=${id}`
      );
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
