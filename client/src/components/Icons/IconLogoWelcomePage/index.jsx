import React from "react";
import s from "./IconLogoWelcomePage.module.css";
import spriteIcon from "../../../images/icons/icons.svg";

const IconLogoWelcomePage = () => {
  return (
    <svg className={s.iconLogo}>
      <use href={`${spriteIcon}#icon-logo-green`}></use>
    </svg>
  );
};

export default IconLogoWelcomePage;
