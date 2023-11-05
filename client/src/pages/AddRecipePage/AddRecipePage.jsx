import React from "react";
import css from "./AddRecipePage.module.css";
import { AddRecipeForm } from "../../components/AddRecipeForm/AddRecipeForm";
import { FollowUs } from "../../components/FollowUs/FollowUs";
import { PopularRecipes } from "../../components/PopularRecipes/PopularRecipes";
import leavesLeftDesk from "../../images/backgrounds/footer-leaves-left-desktop.png";
import leavesLeftDesk2 from "../../images/backgrounds/footer-leaves-left-desktop@2x.png";
import leavesLeftTab from "../../images/backgrounds/footer-leaves-left-tablet.png";
import leavesLeftTab2 from "../../images/backgrounds/footer-leaves-left-tablet@2x.png";
import leavesLeftMob from "../../images/backgrounds/footer-leaves-left-mobile.png";
import leavesLeftMob2 from "../../images/backgrounds/footer-leaves-left-mobile@2x.png";

export const AddRecipePage = () => {
  return (
    <div>
      <img
        className={css.leftbg__image}
        src={leavesLeftDesk}
        srcSet={`${leavesLeftMob} 285w, ${leavesLeftMob2} 570w, ${leavesLeftTab} 409w, ${leavesLeftTab2} 818w, ${leavesLeftDesk} 532w, ${leavesLeftDesk2} 1064w`}
        sizes="(min-width: 1280px) 532px, (min-width: 768px) 409px, (min-width: 320px) 285px, 100vw"
        alt="Leaves left"
      />
      <AddRecipeForm />
      <div className={css.hide}>
        <FollowUs />
      </div>
      <PopularRecipes />
    </div>
  );
};

export default AddRecipePage;
