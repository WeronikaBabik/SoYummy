import css from "./MyPageTitle.module.css";

const MainPageTitle = ({ children }) => {
  return (
    <div className={css.title}>
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
      <p className={css.titleText}>{children}</p>
    </div>
  );
};
export default MainPageTitle;
