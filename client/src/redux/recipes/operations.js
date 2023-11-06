import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3001/api";

// Pobieranie przepisów wg składnika
export const getRecipesByIngredient = createAsyncThunk(
  "recipes/getRecipesByIngredient",
  async ({ ingredient }) => {
    try {
      const response = await axios.get(`/ingredients/${ingredient}`);
      return response.data;
    } catch (error) {
      throw new Error("Error loading recipes by ingredient", error.message);
    }
  }
);

// Pobieranie popularnych przepisów
export const getPopularRecipes = createAsyncThunk(
  "popular/getPopularRecipes",
  async () => {
    try {
      const response = await axios.get("/popular-recipe");
      return response.data;
    } catch (error) {
      throw new Error("Error loading popular recipes");
    }
  }
);
