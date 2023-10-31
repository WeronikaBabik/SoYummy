import { createSlice } from "@reduxjs/toolkit";
import recipesData from "../../data/recipes.json";

const recipesSlice = createSlice({
  name: "recipes",
  initialState: {
    recipes: recipesData,
  },
  reducers: {
    setRecipes: (state, action) => {
      state.recipes.recipes = action.payload;
    },
  },
});

export const { setRecipes } = recipesSlice.actions;
export const recipeReducer = recipesSlice.reducer;
