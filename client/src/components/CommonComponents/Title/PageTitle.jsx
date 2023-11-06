import css from "./PageTitle.module.css";

const PageTitle = ({ children }) => {
  return (
    <div className={css.container}>
      <p className={css.titleText}>{children}</p>
    </div>
  );
};
export default PageTitle;
