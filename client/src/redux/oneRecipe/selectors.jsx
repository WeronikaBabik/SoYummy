export const selectRecipeById = (state) => state.oneRecipe.oneRecipe.item;
export const selectOneRecipeIsLoading = (state) =>
  state.oneRecipe.oneRecipe.isLoading;
export const selectRecipeError = (state) => state.oneRecipe.oneRecipe.error;

export const selectOwnRecipeById = (state) => state.oneRecipe.ownRecipe.item;
export const selectOwnRecipeIsLoading = (state) =>
  state.oneRecipe.ownRecipe.isLoading;
export const selectOwnRecipeError = (state) => state.oneRecipe.ownRecipe.error;
