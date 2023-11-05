import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import categoriesData from "../../data/categoriesList.json";
import { setCategories } from "../../redux/categories/categoriesSlice";
import { selectCategories } from "../../redux/categories/selectors";
import css from "./Select.module.css";

export const Select = ({ handleInputChange }) => {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);
  const [selectedCategory, setSelectedCategory] = useState();

  // useEffect(() => {
  //   fetch(categoriesData)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       dispatch(setCategories(data));
  //     });
  // }, [dispatch]);

  return (
    <div className={css.category__box}>
      <label htmlFor="category" className={css.category__label}>
        Category
      </label>
      <div className={css.select__box}>
        <select
          id="category"
          name="category"
          className={css.select}
          value={categories}
          onChange={handleInputChange}
        >
          {categories.slice(0, 6).map((category) => (
            <option
              key={category.title}
              value={category.title}
              className={css.option}
            >
              {category.title}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Select;
