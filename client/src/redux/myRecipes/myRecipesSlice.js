import { createSlice } from "@reduxjs/toolkit";
import {
  addToOwnRecipes,
  deleteFromOwnRecipes,
  getOwnRecipes,
} from "./operations";

const myRecipesSlice = createSlice({
  name: "myRecipes",
  initialState: {
    items: [
      {
        id: "640cd5ac2d9fecf12e8897f0",
        thumb:
          "https://www.themealdb.com/images/media/meals/wvpsxx1468256321.jpg",
        title: "Teriyaki Chicken Casserole",
        description:
          "A Japanese-inspired casserole made with chicken, teriyaki sauce, rice, and vegetables.",
        time: 75,
      },
      {
        id: "640cd5ac2d9fecf12e8897f5",
        thumb:
          "https://www.themealdb.com/images/media/meals/wvqpwt1468339226.jpg",
        title: "Mediterranean Pasta Salad",
        description:
          "A salad made with pasta, vegetables (such as tomatoes, cucumbers, and olives), feta cheese, and a dressing made with olive oil and lemon juice.",
        time: 27,
      },
    ],
    isLoading: false,
    error: null,
  },
  reducers: {
    setMyRecipes: (state, action) => {
      state.items = [...action.payload];
    },
    removeMyRecipe: (state, action) => {
      state.items = state.favorite.filter(
        (recipe) => recipe.id !== action.payload.id
      );
    },
    addToMyRecipe: (state, action) => {
      state.items.push(action.payload);
    },
  },
  // extraReducers: (builder) =>
  //   builder
  //     .addCase(getOwnRecipes.pending, (state, { payload }) => {
  //       state.isLoading = true;
  //     })
  //     .addCase(getOwnRecipes.fulfilled, (state, { payload }) => {
  //       state.items = [...payload];
  //       state.isLoading = false;
  //       state.error = "";
  //     })
  //     .addCase(getOwnRecipes.rejected, (state, { payload }) => {
  //       state.isLoading = false;
  //       state.error = payload;
  //     })
  //     .addCase(deleteFromOwnRecipes.pending, (state, { payload }) => {
  //       state.isLoading = true;
  //     })
  //     .addCase(deleteFromOwnRecipes.fulfilled, (state, { payload }) => {
  //       state.items = state.items.filter((e) => e.ingredientId !== payload);
  //       state.isLoading = false;
  //       state.error = "";
  //     })
  //     .addCase(deleteFromOwnRecipes.rejected, (state, { payload }) => {
  //       state.isLoading = false;
  //       state.error = payload;
  //     })
  //     .addCase(addToOwnRecipes.pending, (state, { payload }) => {
  //       state.isLoading = true;
  //     })
  //     .addCase(addToOwnRecipes.fulfilled, (state, { payload }) => {
  //       //state.items = [...payload];
  //       state.isLoading = false;
  //       state.error = "";
  //     })
  //     .addCase(addToOwnRecipes.rejected, (state, { payload }) => {
  //       state.isLoading = false;
  //       state.error = payload;
  //     }),
});
export const { setMyRecipes, removeMyRecipe, addToMyRecipe } =
  myRecipesSlice.actions;
export const myRecipesReducer = myRecipesSlice.reducer;
