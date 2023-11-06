import css from "./MyRecipes.module.css";
import searchDesktop from "../../images/backgrounds/search-desktop.png";
import searchDesktop2 from "../../images/backgrounds/search-desktop@2x.png";
import searchTablet from "../../images/backgrounds/search-tablet.png";
import searchTablet2 from "../../images/backgrounds/search-tablet@2x.png";
import NotFound from "../NotFound/NotFound";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  isLoadingRecipesSelector,
  myRecipesSelector,
} from "../../redux/myRecipes/selectors";
import {
  deleteFromOwnRecipes,
  getOwnRecipes,
} from "../../redux/myRecipes/operations";
import MyRecipesItem from "./MyRecipesItem";
import { setMyRecipes } from "../../redux/myRecipes/myRecipesSlice";
import Loader from "../Loader/Loader";

const MyRecipesList = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const myRecipes = useSelector(myRecipesSelector);

  useEffect(() => {
    const fetchMyRecipes = async () => {
      setIsLoading(true);
      try {
        const recipes = await getOwnRecipes();
        dispatch(setMyRecipes(recipes));
      } catch (error) {
        console.error("Something gone wrong within fetchMyRecipes", error);
      } finally {
        setIsLoading(false);
      }
    };
    if (myRecipes.length === 0) {
      fetchMyRecipes();
    } else {
      setIsLoading(false);
    }
  }, [dispatch, myRecipes.length]);

  const handleDelete = async (id) => {
    try {
      setIsLoading(true);
      await deleteFromOwnRecipes(id);
      const { recipes } = await getOwnRecipes();
      setMyRecipes(recipes);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className={css.container}>
      <div className={css.myRecipe}>
        {isLoading && <Loader />}
        {myRecipes.length > 0 ? (
          myRecipes.map((item) => (
            <section key={item.id} className={css.myRecipe__item}>
              <div className={css.myRecipe__imageWrapper}>
                <img
                  src={item.thumb}
                  alt={item.title}
                  className={css.myRecipe__image}
                />
              </div>
              <div className={css.myRecipe__itemInfo}>
                <p className={css.myRecipe__itemTitle}>{item.title}</p>
                <p className={css.myRecipe__itemDesc}>{item.description}</p>
                <p className={css.myRecipe__itemTime}>{item.time} min</p>
              </div>
              <div className={css.btn}>
                <button
                  onClick={() => handleDelete(item.id)}
                  className={css.btnDelete}
                >
                  <svg
                    id="Icon"
                    viewBox="0 0 29 32"
                    stroke="white"
                    fill="#8BAA36"
                  >
                    <path
                      stroke-linejoin="round"
                      stroke-linecap="round"
                      stroke-miterlimit="4"
                      stroke-width="2.9091"
                      d="M19.879 8v-1.067c0-1.493 0-2.24-0.291-2.811-0.256-0.502-0.664-0.91-1.165-1.165-0.57-0.291-1.317-0.291-2.811-0.291h-2.133c-1.493 0-2.24 0-2.811 0.291-0.502 0.256-0.91 0.664-1.165 1.165-0.291 0.57-0.291 1.317-0.291 2.811v1.067M11.879 15.333v6.667M17.212 15.333v6.667M2.545 8h24M23.879 8v14.933c0 2.24 0 3.36-0.436 4.216-0.383 0.753-0.995 1.365-1.748 1.748-0.856 0.436-1.976 0.436-4.216 0.436h-5.867c-2.24 0-3.36 0-4.216-0.436-0.753-0.383-1.365-0.995-1.748-1.748-0.436-0.856-0.436-1.976-0.436-4.216v-14.933"
                    ></path>
                  </svg>
                </button>
                <Link to={`/recipe/${item.id}`} className={css.btnLink}>
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 129 46"
                    className={css.svg}
                  >
                    <path d="M0 15.3333C0 6.86497 6.86497 0 15.3333 0H98.3333C115.27 0 129 13.7299 129 30.6667C129 39.135 122.135 46 113.667 46H30.6667C13.7299 46 0 32.2701 0 15.3333Z" />
                  </svg>

                  <span className={css.btnText}>See recipe</span>
                </Link>
              </div>
            </section>
          ))
        ) : (
          <div className={css.myRecipesEmpty}>
            <h2 className={css.myRecipesEmpty}>
              You don't have any own recipes
            </h2>
            <picture>
              <source
                srcSet={`${searchTablet}, ${searchTablet2} 2x`}
                media="(max-width:767px)"
                sizes="(min-width:250px) 250px, 100vw"
              />
              <source
                srcSet={`${searchDesktop}, ${searchDesktop2} 2x`}
                media="(mi-width:768px)"
                sizes="(min-width:500px) 500px, 100vw"
              />
              <img
                src={searchDesktop2}
                alt="Shopping list is empty"
                height="337px"
                width="525px"
              />
            </picture>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyRecipesList;
