import { createSlice } from "@reduxjs/toolkit";
import {
  addToShoppingList,
  deleteFromShoppingList,
  getShoppingList,
} from "./shoppingListAction";

const initialState = {
  shoppingList: [],
};

const shopRecipesSlice = createSlice({
  name: "shopping-list",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(getShoppingList.pending, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(getShoppingList.fulfilled, (state, { payload }) => {
        state.shoppingList = payload.data.shoppingList;
        state.isLoading = false;
      })
      .addCase(getShoppingList.rejected, (state, { payload }) => {
        state.isLoading = false;
      })
      .addCase(deleteFromShoppingList.pending, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(deleteFromShoppingList.fulfilled, (state, { payload }) => {
        state.shoppingList = payload.data;
        state.isLoading = false;
      })
      .addCase(deleteFromShoppingList.rejected, (state, { payload }) => {
        state.isLoading = false;
      })
      .addCase(addToShoppingList.pending, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(addToShoppingList.fulfilled, (state, { payload }) => {
        state.shoppingList = payload.data;
        state.isLoading = false;
      })
      .addCase(addToShoppingList.rejected, (state, { payload }) => {
        state.isLoading = false;
      }),
});
export const shopRecipesReducer = shopRecipesSlice.reducer;
