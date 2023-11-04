import React, { useState } from "react";
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
      <div className={css.categories}>
        {categories ? (
          <div className={css.list__container}>
            <ul className={css.cat__list}>
              {categories.map((category, index) => (
                <li
                  key={index}
                  className={`${css.cat__li} ${
                    selectedCategory === category.title ? "active" : ""
                  }`}
                >
                  <button
                    key={category.id}
                    onClick={() => handleCategoryClick(category.title)}
                    className={css.cat__button}
                  >
                    <span className={css.cat__title}>{category.title}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p className={css.cat__info}> No categories </p>
        )}
      </div>
    </div>
  );
};
export default CategoriesList;
