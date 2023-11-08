import React from "react";
import Ingredient from "../Ingredient/Ingredient";
import RecipeRpeparation from "../RecipeRpeparation/RecipeRpeparation";
import TitleRecipesList from "../TitleRecipesList/TitleRecipesList";

const IngredientsContainer = ({
  ingredients = [],
  instructions = "",
  preview = "",
  previewImg = "",
  youtube,
  fullImg,
}) => {
  return (
    <div className="container">
      <TitleRecipesList />
      <ul>
        {ingredients.map(({ ttl, _id, thb, measure, desc }, index) => (
          <Ingredient
            key={index}
            title={ttl}
            thumb={thb}
            measure={measure}
            desc={desc}
            id={_id}
          />
        ))}
      </ul>
      <RecipeRpeparation
        instructions={instructions}
        preview={preview}
        previewImg={previewImg}
        youtube={youtube}
        fullImg={fullImg}
      />
    </div>
  );
};

export default IngredientsContainer;
