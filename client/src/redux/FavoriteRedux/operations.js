import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3001/api";

export const fetchFavoriteRecipes = createAsyncThunk(
  "favorite/fetchFavoriteRecipes",
  async () => {
    try {
      const response = await axios.get(`/favorite`);

      return response.data;
    } catch (error) {
      throw new Error("Error loading favorite recipes");
    }
  }
);

export const removeFavoriteRecipe = createAsyncThunk(
  "favorite/removeFavoriteRecipe",
  async (id) => {
    try {
      const response = await axios.delete(`/favorite/${id}`);
      return response.data;
    } catch (error) {
      throw new Error("Error deleting recipe");
    }
  }
);
