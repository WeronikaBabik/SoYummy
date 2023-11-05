import React from "react";
import css from "../RecipePreparationFields/RecipePreparationFields.module.css";

export const RecipePreparationFields = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div className={css.prep__box}>
        <h2 className={css.title}>Recipe Preparation</h2>
        <textarea
          className={css.textarea}
          placeholder="Enter recipe"
        ></textarea>
        <button className={css.btn__add}>
          <span className={css.add__text}>Add</span>{" "}
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 129 46"
            // fill="none"
            className={css.svg__btn}
          >
            <path
              d="M0 15.3333C0 6.86497 6.86497 0 15.3333 0H98.3333C115.27 0 129 13.7299 129 30.6667C129 39.135 122.135 46 113.667 46H30.6667C13.7299 46 0 32.2701 0 15.3333Z"
              // fill="#22252A"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default RecipePreparationFields;
