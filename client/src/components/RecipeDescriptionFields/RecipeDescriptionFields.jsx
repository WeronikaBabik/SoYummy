import React, { useState } from "react";
import css from "./RecipeDescriptionFields.module.css";
import { useDispatch } from "react-redux";
// import { addRecipe } from "../../redux/CategoriesRedux/recipesSlice";
import { Select } from "../../components/Select/Select";

export const RecipeDescriptionFields = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: [],
    cookingTime: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   dispatch(addRecipe(formData));
  // };
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div className={css.main__box}>
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
          </div>
          <h1 className={css.h1}>Add recipe</h1>
        </div>
        <div className={css.form__box}>
          <div className={css.image__box}>
            <label class={css.image__upload}>
              <input
                // className={css.image__upload}
                type="file"
                id="image"
                name="image"
                accept="image/*"
                style={{ display: "none" }}
              />
            </label>
          </div>
          {/* onSubmit={handleSubmit} */}
          <form className={css.form}>
            <div className={css.input__box}>
              <input
                type="text"
                id="title"
                name="title"
                placeholder="Enter item title"
                className={css.input__title}
                value={formData.title}
                onChange={handleInputChange}
              />
            </div>
            <div className={css.input2__box}>
              <input
                type="text"
                id="description"
                name="description"
                className={css.input__descr}
                placeholder="Enter about recipe"
                value={formData.description}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <Select />
            </div>
            <div className={css.time__box}>
              <label htmlFor="cookingTime" className={css.time}>
                <span className={css.time__text}>Cooking time</span>
              </label>
              <select
                id="cookingTime"
                name="cookingTime"
                value={formData.cookingTime}
                onChange={handleInputChange}
                className={css.select}
              >
                <svg id="icon-down" viewBox="0 0 32 32" fill="green">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="5.333"
                    d="M29.333 9.333 16 22.666 2.667 9.333"
                  />
                </svg>
                <option className={css.select__list} value="5 min">
                  5 min
                </option>
                <option className={css.select__list} value="10 min">
                  10 min
                </option>
                <option className={css.select__list} value="15 min">
                  15 min
                </option>
                <option className={css.select__list} value="20 min">
                  20 min
                </option>
                <option className={css.select__list} value="25 min">
                  25 min
                </option>
                <option value="30 min">30 min</option>
              </select>
              {/* <button style={{ display: "none" }} type="submit">
            Dodaj przepis
          </button> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RecipeDescriptionFields;
