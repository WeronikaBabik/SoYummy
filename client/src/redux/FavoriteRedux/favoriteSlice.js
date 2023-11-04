import { createSlice } from "@reduxjs/toolkit";

const favoriteRecipesSlice = createSlice({
  name: "favorite",
  initialState: {
    favorite: [
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
      {
        id: "640cd5ac2d9fecf12e8897f",
        thumb:
          "https://www.themealdb.com/images/media/meals/xxyupu1468262513.jpg",
        title: "Honey Teriyaki Salmon",
        description:
          "A Japanese-inspired dish made with salmon fillets, teriyaki sauce, honey, and sesame seeds.",
        time: 25,
      },
      {
        id: "640cd5ac2d9fecf12e8897f3",
        thumb:
          "https://www.themealdb.com/images/media/meals/rvxxuy1468312893.jpg",
        title: "Vegan Lasagna",
        description:
          "A plant-based version of the classic Italian dish, made with layers of pasta, tomato sauce, vegan cheese, and vegetables (such as spinach, zucchini, and mushrooms).",
        time: 50,
      },
      {
        id: "640cd5ac2d9fecf12e889800",
        thumb:
          "https://www.themealdb.com/images/media/meals/uuxwvq1483907861.jpg",
        title: "Eton Mess",
        description:
          "A traditional English dessert made with whipped cream, meringue, and fresh berries.",
        time: 20,
      },
      {
        id: 6,
        thumb:
          "https://www.themealdb.com/images/media/meals/sxxpst1468569714.jpg",
        title: "Irish stew",
        description:
          "A traditional Irish dish made with lamb, potatoes, carrots, onions, and herbs, cooked in a broth or gravy.",
        time: 160,
      },
    ],
  },
  reducers: {
    setFavoriteRecipes: (state, action) => {
      state.favorite = [...action.payload];
    },
    removeFavoriteRecipe: (state, action) => {
      state.favorite = state.favorite.filter(
        (recipe) => recipe.id !== action.payload.id
      );
    },
  },
});

export const { setFavoriteRecipes, removeFavoriteRecipe } =
  favoriteRecipesSlice.actions;

export const favoriteReducer = favoriteRecipesSlice.reducer;
