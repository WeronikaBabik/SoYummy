import { createSlice } from "@reduxjs/toolkit";
import {
  getRecipeById,
  getOwnRecipeById,
  addToShoppingList,
  removeFromShoppingList,
} from "./operations";

const initialState = {
  oneRecipe: {
    item: null,
    isLoading: false,
    error: null,
  },
  ownRecipe: {
    item: null,
    isLoading: false,
    error: null,
  },
};

const pendingOwn = (state) => {
  state.oneRecipe.item = null;
  state.ownRecipe.isLoading = true;
};
const pendingOne = (state) => {
  state.ownRecipe.item = null;
  state.oneRecipe.isLoading = true;
};
const rejectedOwn = (state, { payload }) => {
  state.ownRecipe.isLoading = false;
  state.ownRecipe.error = payload;
};
const rejectedOne = (state, { payload }) => {
  state.oneRecipe.isLoading = false;
  state.oneRecipe.error = payload;
};

const oneRecipeSlice = createSlice({
  name: "oneRecipe",
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(getRecipeById.pending, pendingOwn)
      .addCase(getRecipeById.fulfilled, (state, { payload }) => {
        state.oneRecipe.item = payload;
        state.oneRecipe.isLoading = false;
        state.oneRecipe.error = null;
        state.ownRecipe.isLoading = false;
        state.ownRecipe.error = null;
      })
      .addCase(getRecipeById.rejected, rejectedOne)

      .addCase(getOwnRecipeById.pending, pendingOwn)
      .addCase(getOwnRecipeById.fulfilled, (state, { payload }) => {
        state.ownRecipe.item = payload;
        state.ownRecipe.isLoading = false;
        state.ownRecipe.error = null;
        state.oneRecipe.isLoading = false;
        state.oneRecipe.error = null;
      })
      .addCase(getOwnRecipeById.rejected, rejectedOwn),
});

export const oneRecipeReducer = oneRecipeSlice.reducer;
