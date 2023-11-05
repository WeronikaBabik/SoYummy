import React from "react";
import css from "./AddRecipeForm.module.css";
import { RecipeDescriptionFields } from "../RecipeDescriptionFields/RecipeDescriptionFields";
// import { RecipeIngredientsFields } from "../RecipeIngredientsFields/RecipeIngredientsFields";
import { RecipePreparationFields } from "../RecipePreparationFields/RecipePreparationFields";

export const AddRecipeForm = () => {
  return (
    <div>
      <RecipeDescriptionFields />
      {/* <RecipeIngredientsFields /> */}
      <RecipePreparationFields />
    </div>
  );
};

export default AddRecipeForm;
