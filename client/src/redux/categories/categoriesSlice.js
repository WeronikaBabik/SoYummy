import { createSlice } from "@reduxjs/toolkit";
import { getAllCategoriesList } from "./operations";

const initialState = {
  categories: [],
  selectedCategory: "Beef",
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setCategories: (state, action) => {
      state.categories = [...action.payload];
    },
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
  },
  extraReducers: (builder) =>
    builder.addCase(getAllCategoriesList.fulfilled, (state, action) => {
      state.categories = action.payload;
    }),
});

export const { setSelectedCategory } = categoriesSlice.actions;
export const selectRecipesByCategory = (categoryName) => (state) =>
  state.recipes.recipes.filter((recipe) => recipe.category === categoryName);

export const categoriesReducer = categoriesSlice.reducer;
