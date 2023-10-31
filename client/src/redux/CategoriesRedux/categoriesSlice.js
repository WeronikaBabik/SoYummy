import { createSlice } from "@reduxjs/toolkit";
import categoriesList from "../../data/categoriesList.json";

const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    categories: categoriesList,
    selectedCategory: "Beef",
  },
  reducers: {
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
  },
});
export const { setSelectedCategory } = categoriesSlice.actions;
export const selectRecipesByCategory = (categoryName) => (state) =>
  state.recipes.recipes.filter((recipe) => recipe.category === categoryName);

export const categoriesReducer = categoriesSlice.reducer;
