import { useNavigate } from "react-router-dom";
import css from "./WelcomePage.module.css";
// import IconLogoWelcomePage from "../Icons/IconLogoWelcomePage";

export const WelcomePage = () => {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate("/register", { replace: true });
  };

  const handleSigninClick = () => {
    navigate("/signin", { replace: true });
  };
  return (
    <div className={css.background}>
      <div className={css.contentWrap}>
        <svg
          className={css.logo}
          width="44"
          height="44"
          viewBox="0 0 44 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="44" height="44" rx="12" fill="#8BAA36"></rect>
          <path
            d="M10 10.1025V15.5561V15.6661V15.5561C10 17.1132 10.6794 18.4919 11.7328 19.3841C12.2479 19.8205 12.5882 20.4096 12.5882 21.0635V30.1667C12.5882 31.1787 13.4579 32.0001 14.5294 32.0001C15.6009 32.0001 16.4706 31.1787 16.4706 30.1667V21.0635C16.4706 20.4096 16.8109 19.8205 17.326 19.3841C18.3794 18.4919 19.0588 17.1132 19.0588 15.5561V10.1025V15.5561"
            stroke="#FAFAFA"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M14.5293 16.1112V10"
            stroke="#FAFAFA"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M31.9999 11.2854C31.9999 10.6107 31.4201 10.0632 30.7058 10.0632H29.4116C27.2673 10.0632 25.5293 11.7046 25.5293 13.7299V21.0633C25.5293 22.6571 26.6125 24.0003 28.1175 24.5051V30.1665C28.1175 31.1785 28.9872 31.9999 30.0587 31.9999C31.1302 31.9999 31.9999 31.1785 31.9999 30.1665V24.73V11.2854Z"
            stroke="#FAFAFA"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
        <h3 className={css.headline}>Welcome to the app!</h3>
        <p className={css.text}>
          This app offers more than just a collection of recipes - it is
          designed to be your very own digital cookbook. You can easily save and
          retrieve your own recipes at any time.
        </p>
        <div>
          <button className={css.filledbutton} onClick={handleRegisterClick}>
            Registration
          </button>
          <button className={css.outlinedbutton} onClick={handleSigninClick}>
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
};
