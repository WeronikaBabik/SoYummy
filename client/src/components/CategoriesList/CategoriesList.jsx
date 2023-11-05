import React, { useEffect, useState } from "react";
import { useSelector, useDispatch, connect } from "react-redux";
import {
  selectCategories,
  selectSelectedCategory,
} from "../../redux/categories/selectors";
import { setSelectedCategory } from "../../redux/categories/categoriesSlice";
import css from "./CategoriesList.module.css";
import { getAllCategoriesList } from "../../redux/categories/operations";

export const CategoriesList = () => {
  const categories = useSelector(selectCategories);
  const selectedCategory = useSelector(selectSelectedCategory);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategoriesList());
  }, [dispatch]);

  const handleCategoryClick = (category) => {
    dispatch(setSelectedCategory(category));
  };

  return (
    <div className={css.cat__box}>
      <div className={css.categories}>
        {categories ? (
          <div className={css.list__container}>
            <ul className={css.cat__list}>
              {categories?.map((category, index) => (
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

const mapStateToProps = (state) => ({
  categories: state.categories, // Przyjmij dane kategorii z Redux Store
});

export default connect(mapStateToProps, { getAllCategoriesList })(
  CategoriesList
);
// export default CategoriesList;
