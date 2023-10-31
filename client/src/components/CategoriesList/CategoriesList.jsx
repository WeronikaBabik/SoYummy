import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectCategories,
  selectSelectedCategory,
} from "../../redux/selectors";
import { setSelectedCategory } from "../../redux/CategoriesRedux/categoriesSlice";
import css from "./CategoriesList.module.css";

export const CategoriesList = () => {
  const categories = useSelector(selectCategories);
  const selectedCategory = useSelector(selectSelectedCategory);
  const dispatch = useDispatch();

  const handleCategoryClick = (category) => {
    dispatch(setSelectedCategory(category));
  };

  return (
    <div className={css.cat__box}>
      <h1 className={css.cat__header}>Categories</h1>
      <div className={css.categories}>
        {categories ? (
          <ul className={css.cat__list}>
            {categories.map((category) => (
              <li
                key={category._id}
                className={`cat__list-li ${
                  selectedCategory === category.title ? "active" : ""
                }`}
              >
                <button
                  // to={`/categories/${category.title.toLowerCase()}`}
                  key={category._id}
                  onClick={() => handleCategoryClick(category.title)}
                  className={css.cat__button}
                >
                  <span className={css.cat__title}>{category.title}</span>
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className={css.cat__info}> No categories </p>
        )}
      </div>
    </div>
  );
};
export default CategoriesList;
