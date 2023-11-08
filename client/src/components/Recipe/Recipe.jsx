import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";
import Loader from "../Loader/Loader";
//import { getRecipeById } from "../../services/api/recipesAPI";
import IngredientsContainer from "./IngredientsContainer/IngredientsContainer";

import css from "./Recipe.module.css";
import TopContainer from "../Recipe/TopContainer/TopContainer";
import { useDispatch, useSelector } from "react-redux";
import {
  selectOneRecipeIsLoading,
  selectOwnRecipeById,
  selectOwnRecipeIsLoading,
  selectRecipeById,
} from "../../redux/oneRecipe/selectors";
import {
  getOwnRecipeById,
  getRecipeById,
} from "../../redux/oneRecipe/operations";
import NotFound from "../NotFound/NotFound";

const Recipe = () => {
  const { recipeId } = useParams();
  const location = useLocation();
  const dispatch = useDispatch();
  const recipe = useSelector(selectRecipeById);
  const ownRecipe = useSelector(selectOwnRecipeById);
  const recipeLoading = useSelector(selectOneRecipeIsLoading);
  const ownRecipeLoading = useSelector(selectOwnRecipeIsLoading);

  const isLoading = recipeLoading || ownRecipeLoading;
  const [currentRecipe, setCurrentRecipe] = useState(null);
  const [currentIngredients, setCurrentIngredients] = useState([]);
  const [listIngredients, setListIngredients] = useState(null);
  const [isOwnRecipe, setOwnRecipe] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (location?.state?.from.pathname === "/my") {
      setOwnRecipe(true);
      dispatch(getOwnRecipeById(recipeId));
    } else {
      dispatch(getRecipeById(recipeId));
      setOwnRecipe(false);
    }
  }, [recipeId, dispatch, location?.state?.from.pathname]);

  useEffect(() => {
    if (location?.state?.from.pathname === "/my") {
      setCurrentRecipe(ownRecipe);
    } else if (recipe) {
      setCurrentRecipe(recipe[0]);
    }
  }, [recipe, ownRecipe, location?.state?.from.pathname]);

  useEffect(() => {
    if (currentRecipe !== null) {
      const { ingredients } = currentRecipe;
      setCurrentIngredients(ingredients);
    }
  }, [currentRecipe]);

  // useEffect(() => {
  //   const getIngredients = async () => {
  //     try {
  //       const IngredientsList = await getIngredientsList();
  //       setListIngredients(IngredientsList);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   getIngredients();
  // }, []);
  // useEffect(() => {
  //   setIsLoading(true);
  //   const storedFrom = JSON.parse(localStorage.getItem("fromId"));

  //   if (location.state?.from || storedFrom === recipeId) {
  //     setTimeout(async () => {
  //       await getRecipeById(recipeId)
  //         .then((data) => setRecipe(data))
  //         .catch((error) => console.log(error));
  //       setIsLoading(false);
  //     }, 1000);
  //     localStorage.setItem("fromId", JSON.stringify(recipeId));
  //     return;
  //   }

  //   setTimeout(async () => {
  //     await getRecipeById(recipeId)
  //       .then((data) => setRecipe(data))
  //       .catch((error) => console.log(error));
  //     setIsLoading(false);
  //   }, 1000);
  //   console.log(recipe);
  // }, [recipeId, location.state?.from, location]);

  const {
    description,
    time,
    title,
    ingredients,
    instructions,
    preview,
    previewImg,
    _id,
    favorite,
    youtube,
    fullImg,
  } = currentRecipe || {};

  return (
    <>
      {isLoading && <Loader pageHeight="100vh" />}
      {currentRecipe !== null ? (
        <>
          <TopContainer
            title={title}
            description={description}
            time={time}
            favorite={favorite}
            id={_id}
          />
          {isLoading ? (
            <Loader />
          ) : (
            <div className={css.wrapper}>
              {
                <IngredientsContainer
                  ingredients={ingredients}
                  instructions={instructions}
                  preview={preview}
                  previewImg={previewImg}
                  youtube={youtube}
                  fullImg={fullImg}
                />
              }
            </div>
          )}
        </>
      ) : (
        <div>
          <NotFound />
        </div>
      )}
    </>
  );
};

export default Recipe;
