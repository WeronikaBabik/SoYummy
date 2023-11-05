import css from "./PageTitle.module.css";

const PageTitle = ({ children }) => {
  return (
    <div>
      <p className={css.titleText}>{children}</p>
    </div>
  );
};
export default PageTitle;
