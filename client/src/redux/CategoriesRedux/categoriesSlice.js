import { createSlice } from "@reduxjs/toolkit";
import { getAllCategoriesList } from "../FavoriteRedux/operations";

const initialState = {
  categories: [],
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  selectedCategory: "Beef",
  reducers: {},
  extraReducers: (builder) => builder.addCase(),
  // reducers: {
  //   setSelectedCategory: (state, action) => {
  //     state.selectedCategory = action.payload;
  //   },
  // },
});
export const { setSelectedCategory } = categoriesSlice.actions;
export const selectRecipesByCategory = (categoryName) => (state) =>
  state.recipes.recipes.filter((recipe) => recipe.category === categoryName);

export const categoriesReducer = categoriesSlice.reducer;
