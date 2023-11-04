import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import css from "../FavoritePage/FavoritePage.module.css";
import { Link } from "react-router-dom";
import {
  setFavoriteRecipes,
  removeFavoriteRecipe,
} from "../../redux/FavoriteRedux/favoriteSlice";
import { fetchFavoriteRecipes } from "../../redux/FavoriteRedux/operations";
import { selectFavoriteRecipes } from "../../redux/selectors";
import leavesLeftDesk from "../../images/backgrounds/footer-leaves-left-desktop.png";
import leavesLeftDesk2 from "../../images/backgrounds/footer-leaves-left-desktop@2x.png";
import leavesLeftTab from "../../images/backgrounds/footer-leaves-left-tablet.png";
import leavesLeftTab2 from "../../images/backgrounds/footer-leaves-left-tablet@2x.png";
import leavesLeftMob from "../../images/backgrounds/footer-leaves-left-mobile.png";
import leavesLeftMob2 from "../../images/backgrounds/footer-leaves-left-mobile@2x.png";

export const FavoritePage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch;

  const favoriteRecipes = useSelector(selectFavoriteRecipes);
  const recipesPerPage = 4;
  const [currentPage, setCurrentPage] = useState(0);
  const startIndex = currentPage * recipesPerPage;
  const endIndex = startIndex + recipesPerPage;
  const recipesToDisplay = favoriteRecipes.slice(startIndex, endIndex);
  const totalPages = Math.ceil(favoriteRecipes.length / recipesPerPage);

  useEffect(() => {
    const fetchFavorite = async () => {
      setIsLoading(true);
      try {
        const recipes = await fetchFavoriteRecipes();
        dispatch(setFavoriteRecipes(recipes));
      } catch (error) {
        console.error("Error fetching favorite recipes:", error);
      } finally {
        setIsLoading(false);
      }
    };

    if (favoriteRecipes.length === 0) {
      fetchFavorite();
    } else {
      setIsLoading(false);
    }
  }, [dispatch, favoriteRecipes.length]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };

  const goPrev = currentPage > 0;
  const goNext = currentPage < totalPages - 1;

  const handleRemoveFavoriteRecipe = (id) => {
    dispatch(removeFavoriteRecipe(id));
  };

  return (
    <div>
      <div style={{ position: "relative" }}>
        <svg className={css.rectangle1}>
          <rect width="100%" height="100%" fill="#8BAA36" />
        </svg>
        <svg className={css.rectangle2}>
          <rect width="100%" height="100%" fill="#000" />
        </svg>
        <svg className={css.rectangle3}>
          <rect width="100%" height="100%" fill="#8BAA36" />
        </svg>
        <h2 className={css.h2}>Favorites</h2>
      </div>
      <div className={css.favorite__box}>
        {isLoading ? (
          <p>Loader...</p>
        ) : // <Loader />
        recipesToDisplay.length > 0 ? (
          recipesToDisplay.map((recipe) => (
            <div className={css.recipe__card} key={recipe.id}>
              <div>
                <img
                  src={recipe.thumb}
                  alt={recipe.title}
                  className={css.recipe__img}
                />
              </div>
              <div className={css.info__wrap}>
                <p className={css.recipe__title}>{recipe.title}</p>
                <p className={css.recipe__descr}>{recipe.description}</p>
                <p className={css.recipe__time}>{recipe.time} min</p>
              </div>
              <div className={css.btns__box}>
                <button
                  onClick={() => handleRemoveFavoriteRecipe(recipe.id)}
                  className={css.delete__btn}
                >
                  <svg
                    id="icon-trash"
                    viewBox="0 0 32 32"
                    stroke="black"
                    fill="#ebf3d4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.909"
                      d="M21.818 7.273V6.109c0-1.629 0-2.444-.317-3.066a2.913 2.913 0 0 0-1.271-1.271c-.622-.317-1.437-.317-3.066-.317h-2.327c-1.629 0-2.444 0-3.066.317A2.913 2.913 0 0 0 10.5 3.043c-.317.622-.317 1.437-.317 3.066v1.164m2.908 8v7.273m5.818-7.273v7.273m-16-15.273h26.182m-2.909 0v16.291c0 2.444 0 3.666-.476 4.599a4.36 4.36 0 0 1-1.907 1.907c-.934.476-2.155.476-4.599.476h-6.4c-2.444 0-3.666 0-4.599-.476a4.36 4.36 0 0 1-1.907-1.907c-.476-.934-.476-2.155-.476-4.599V7.273"
                    />
                  </svg>
                </button>
                <Link to={`/recipe/${recipe.id}`} className={css.recipe__see}>
                  <svg
                    width="160px"
                    height="54px"
                    viewBox="0 0 160 54"
                    className={css.svg__btn}
                  >
                    <path d="M0 18C0 8.05887 8.05888 0 18 0H124C143.882 0 160 16.1178 160 36C160 45.9411 151.941 54 142 54H36C16.1178 54 0 37.8822 0 18Z"></path>
                  </svg>
                  <span className={css.span}>See recipe</span>
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p>Your favorite recipes list is empty </p>
        )}
      </div>
      <div>
        {favoriteRecipes.length > recipesPerPage && (
          <div
            className={css.pagination__box}
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
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
        <img
          className={css.leftbg__image}
          src={leavesLeftDesk}
          srcSet={`${leavesLeftMob} 285w, ${leavesLeftMob2} 570w, ${leavesLeftTab} 409w, ${leavesLeftTab2} 818w, ${leavesLeftDesk} 532w, ${leavesLeftDesk2} 1064w`}
          sizes="(min-width: 1280px) 532px, (min-width: 768px) 409px, (min-width: 320px) 285px, 100vw"
          alt="Leaves left"
        />
      </div>
    </div>
  );
};

export default FavoritePage;
