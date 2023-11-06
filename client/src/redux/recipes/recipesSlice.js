import { createSlice } from "@reduxjs/toolkit";
import { getPopularRecipes } from "./operations";

export const recipesSlice = createSlice({
  name: "recipes",
  initialState: {
    recipes: [],
  },
  reducers: {
    setRecipes: (state, action) => {
      state.recipes.recipes = action.payload;
    },
  },
});

export const popularRecipesSlice = createSlice({
  name: "popularRecipes",
  initialState: {
    recipes: [
      {
        _id: {
          $oid: "640cd5ac2d9fecf12e8897fc",
        },
        title: "Spaghetti Bolognese",
        description:
          "An Italian pasta dish made with spaghetti and a meat-based sauce, typically containing beef, tomatoes, onions, garlic, and herbs.",
        thumb:
          "https://www.themealdb.com/images/media/meals/sutysw1468247559.jpg",
      },
      {
        _id: {
          $oid: "640cd5ac2d9fecf12e8897ee",
        },
        title: "Bakewell tart",
        description:
          "A British dessert consisting of a shortcrust pastry shell filled with raspberry jam, frangipane, and topped with almonds.",
        thumb:
          "https://www.themealdb.com/images/media/meals/wyrqqq1468233628.jpg",
      },
      {
        _id: {
          $oid: "640cd5ac2d9fecf12e8897f0",
        },
        title: "Teriyaki Chicken Casserole",
        description:
          "A Japanese-inspired casserole made with chicken, teriyaki sauce, rice, and vegetables.",
        thumb:
          "https://www.themealdb.com/images/media/meals/wvpsxx1468256321.jpg",
      },
      {
        _id: {
          $oid: "640cd5ac2d9fecf12e889800",
        },
        title: "Eton Mess",
        description:
          "A traditional English dessert made with whipped cream, meringue, and fresh berries.",
        thumb:
          "https://www.themealdb.com/images/media/meals/uuxwvq1483907861.jpg",
      },
    ],
    isLoading: "idle",
    error: null,
  },
  reducers: {
    setPopularRecipes: (state, action) => {
      state.recipes = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPopularRecipes.pending, (state) => {
        state.isLoading = "pending";
      })
      .addCase(getPopularRecipes.fulfilled, (state, action) => {
        state.isLoading = "fulfilled";
        state.recipes = action.payload;
      })
      .addCase(getPopularRecipes.rejected, (state, action) => {
        state.isLoading = "rejected";
        state.error = action.error.message;
      });
  },
});

export const { setRecipes, setPopularRecipes } = recipesSlice.actions;
export const recipeReducer = recipesSlice.reducer;
export const popularRecipesReducer = popularRecipesSlice.reducer;
