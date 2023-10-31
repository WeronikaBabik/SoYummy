import React from "react";
import { CategoriesList } from "../CategoriesList/CategoriesList";
import { RecipesList } from "../RecipesList/RecipesList";

export const CategoriesPage = ({ recipes }) => {
  return (
    <div>
      <CategoriesList />
      <RecipesList recipes={recipes} />
    </div>
  );
};

export default CategoriesPage;
