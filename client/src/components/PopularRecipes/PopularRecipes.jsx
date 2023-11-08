// PopularRecipes.js
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPopularRecipes } from "../../redux/recipes/operations";
import { Link } from "react-router-dom";
import css from "./PopularRecipes.module.css";
import { setPopularRecipes } from "../../redux/recipes/recipesSlice";

export const PopularRecipes = () => {
  const dispatch = useDispatch();
  const popularRecipes = useSelector((state) => state.popularRecipes.recipes);

  // useEffect(() => {
  //   dispatch(setPopularRecipes);
  // }, [dispatch]);

  useEffect(() => {
    const getPopularRecipes = async () => {
      try {
        dispatch(setPopularRecipes);
      } catch (error) {
        console.error("Error fetching favorite recipes:", error);
      }
    };
    getPopularRecipes();
  }, [dispatch, setPopularRecipes]);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div className={css.popular__box}>
        <h2 className={css.popular__header}>Popular recipe</h2>
        {popularRecipes.length > 0 ? (
          <ul className={css.popular__list}>
            {popularRecipes.map((recipe) => (
              <li key={recipe.id} className={css.popular__item}>
                <Link to={`/recipe/${recipe.id}`} className={css.link}>
                  <img src={recipe.thumb} className={css.popular__img} />
                  <div className={css.descr__box}>
                    <p className={css.popular__title}>{recipe.title}</p>
                    <p className={css.popular__decsr}>{recipe.description}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p> No popular recipes available at the moment.</p>
        )}
      </div>
    </div>
  );
};

export default PopularRecipes;
