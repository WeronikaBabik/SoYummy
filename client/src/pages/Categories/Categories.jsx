import leavesLeftDesk from "../../images/backgrounds/footer-leaves-left-desktop.png";
import leavesLeftDesk2 from "../../images/backgrounds/footer-leaves-left-desktop@2x.png";
import leavesLeftTab from "../../images/backgrounds/footer-leaves-left-tablet.png";
import leavesLeftTab2 from "../../images/backgrounds/footer-leaves-left-tablet@2x.png";
import leavesLeftMob from "../../images/backgrounds/footer-leaves-left-mobile.png";
import leavesLeftMob2 from "../../images/backgrounds/footer-leaves-left-mobile@2x.png";
// import leavesRightDesk from "../../images/backgrounds/footer-leaves-right-desktop.png";
// import leavesRightDesk2 from "../../images/backgrounds/footer-leaves-right-desktop@2x.png";
// import leavesRightTab from "../../images/backgrounds/footer-leaves-right-tablet.png";
// import leavesRightTab2 from "../../images/backgrounds/footer-leaves-right-tablet@2x.png";
// import leavesRightMob from "../../images/backgrounds/footer-leaves-right-mobile.png";
// import leavesRightMob2 from "../../images/backgrounds/footer-leaves-right-mobile@2x.png";
import css from "../Categories/Categories.module.css";
import { CategoriesPage } from "../../components/CategoriesPage/CategoriesPage";

export const Categories = () => {
  return (
    <div style={{ position: "relative" }}>
      <section className={css.categories__page}>
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
        <div className={css.container}>
          <h1 className={css.h1}>Categories</h1>
          <CategoriesPage />
        </div>
      </section>
      <img
        className={css.leftbg__image}
        src={leavesLeftDesk}
        srcSet={`${leavesLeftMob} 285w, ${leavesLeftMob2} 570w, ${leavesLeftTab} 409w, ${leavesLeftTab2} 818w, ${leavesLeftDesk} 532w, ${leavesLeftDesk2} 1064w`}
        sizes="(min-width: 1280px) 532px, (min-width: 768px) 409px, (min-width: 320px) 285px, 100vw"
        alt="Leaves left"
      />
      {/* <img
        className={css.rightbg__image}
        src={leavesRightDesk}
        srcSet={`${leavesRightMob} 285w, ${leavesRightMob2} 570w, ${leavesRightTab} 409w, ${leavesRightTab2} 818w, ${leavesRightDesk} 532w, ${leavesRightDesk2} 1064w`}
        sizes="(min-width: 1280px) 532px, (min-width: 768px) 409px, (min-width: 320px) 285px, 100vw"
        alt="Leaves right"
      /> */}
    </div>
  );
};

export default Categories;
