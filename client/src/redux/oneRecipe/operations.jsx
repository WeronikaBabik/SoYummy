import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
axios.defaults.baseURL = "http://localhost:3001/api";

export const getRecipeById = createAsyncThunk(
  "oneRecipe/getRecipeById",
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.get(`/recipes/${id}`);
      return data.result.recipe;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getOwnRecipeById = createAsyncThunk(
  "oneRecipe/getOwnRecipeById",
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.get(`/ownRecipes/${id}`);
      return data.data.recipes;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
// export const addToShoppingList = createAsyncThunk(
//   "oneRecipe/addToShoppingList",
//   async (body, thunkAPI) => {
//     try {
//       const response = await axios.post(`/shopping-list`, body);
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// export const removeFromShoppingList = createAsyncThunk(
//   "oneRecipe/removeFromShoppingList",
//   async (id, thunkAPI) => {
//     try {
//       const response = await axios.delete(`/shopping-list/${id}`);
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
