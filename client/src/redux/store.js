import storage from "redux-persist/lib/storage";
import { configureStore } from "@reduxjs/toolkit";
import { categoriesReducer } from "./categories/categoriesSlice";
import { popularRecipesReducer, recipeReducer } from "./recipes/recipesSlice";
import { searchReducer } from "../redux/search/searchSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { authReducer } from "./auth/authSlice";
import { favoriteReducer } from "./favorites/favoriteSlice";
import { shoppingReducer } from "./shoppingList/shoppingListSlice";
import { myRecipesReducer } from "./myRecipes/myRecipesSlice";
import { oneRecipeReducer } from "./oneRecipe/slice";

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token", "isLoggedIn", "user"],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    categories: categoriesReducer,
    recipes: recipeReducer,
    popularRecipes: popularRecipesReducer,
    favorite: favoriteReducer,
    search: searchReducer,
    shoppingList: shoppingReducer,
    oneRecipe: oneRecipeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === "development",
});

export const persistor = persistStore(store);
