import { useNavigate } from "react-router-dom";
import css from "./WelcomePage.module.css";

export const WelcomePage = () => {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate("/register", { replace: true });
  };

  const handleLoginClick = () => {
    navigate("/login", { replace: true });
  };
  return (
    <div className={css.background}>
      <div className={css.contentWrap}>
        <h3>Welcome to the app!</h3>
        <p className={css.text}>
          This app offers more than just a collection of recipes - it is
          designed to be your very own digital cookbook. You can easily save and
          retrieve your own recipes at any time.
        </p>
        <div>
          <button onClick={handleRegisterClick}>Registration</button>
          <button onClick={handleLoginClick}>Sign in</button>
        </div>
      </div>
    </div>
  );
};
