import { configureStore } from "@reduxjs/toolkit";
import { categoriesReducer } from "./CategoriesRedux/categoriesSlice";
import { recipeReducer } from "./CategoriesRedux/recipesSlice";

export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    recipes: recipeReducer,
  },
});
