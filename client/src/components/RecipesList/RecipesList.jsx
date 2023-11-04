import React, { useState } from "react";
import { useSelector } from "react-redux";
import css from "../RecipesList/RecipesList.module.css";
import { selectRecipes, selectSelectedCategory } from "../../redux/selectors";
import { Link } from "react-router-dom";

export const RecipesList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const selectedCategory = useSelector(selectSelectedCategory);
  const allRecipes = useSelector(selectRecipes);

  const recipesPerPage = 8;
  const [currentPage, setCurrentPage] = useState(0);
  const startIndex = currentPage * recipesPerPage;
  const endIndex = startIndex + recipesPerPage;

  const recipesByCategory = allRecipes.filter(
    (recipe) => recipe.category === selectedCategory
  );
  const totalPages = Math.ceil(recipesByCategory.length / recipesPerPage);
  const recipesToDisplay = recipesByCategory.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };

  const goPrev = currentPage > 0;
  const goNext = currentPage < totalPages - 1;

  return (
    <div>
      <div className={css.recipes__box}>
        {isLoading ? (
          <p>Loader...</p>
        ) : // <Loader />
        recipesToDisplay.length > 0 ? (
          recipesToDisplay.map((recipe, index) => (
            <div className={css.recipe__card}>
              <img
                key={index}
                src={recipe.thumb}
                alt={recipe.title}
                className={css.recipe__img}
              />
              <Link to={`/recipe/${recipe.id}`} className={css.recipe__btn}>
                <span className={css.btn__text}>{recipe.title}</span>
              </Link>
            </div>
          ))
        ) : (
          <p>No recipes found</p>
        )}
      </div>
      <div>
        {recipesByCategory.length > recipesPerPage && (
          <div className={css.pagination__box}>
            {goPrev && (
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                className={css.prev__btn}
              >
                &lt;
              </button>
            )}
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => handlePageChange(index)}
                className={`${css.pagination__btns} ${
                  currentPage === index + 1 ? "active" : ""
                }`}
              >
                {index + 1}
              </button>
            ))}
            {goNext && (
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                className={css.next__btn}
              >
                &gt;
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default RecipesList;
