import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { signin } from "../../redux/auth/operations";
import css from "./SigninForm.module.css";

import registrationImageDesk from "../../images/backgrounds/registration-image-desktop.png";
import registrationImageDesk2 from "../../images/backgrounds/registration-image-desktop@2x.png";
import registrationImageTab from "../../images/backgrounds/registration-image-tablet.png";
import registrationImageTab2 from "../../images/backgrounds/registration-image-tablet@2x.png";
import registrationImageMob from "../../images/backgrounds/registration-image-mobile.png";
import registrationImageMob2 from "../../images/backgrounds/registration-image-mobile@2x.png";

import regBgDesk from "../../images/backgrounds/registration-background-desktop.png";
import regBgDesk2 from "../../images/backgrounds/registration-background-desktop@2x.png";
import regBgTab from "../../images/backgrounds/registration-background-tablet.png";
import regBgTab2 from "../../images/backgrounds/registration-background-tablet@2x.png";
import regBgMob from "../../images/backgrounds/registration-background-mobile.png";
import regBgMob2 from "../../images/backgrounds/registration-background-mobile@2x.png";

export const SigninForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.currentTarget;

    console.log({
      email: form.elements.email.value,
      password: form.elements.password.value,
    });

    dispatch(
      signin({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );

    form.reset();
  };

  return (
    <div className={css.container}>
      <img
        className={css.image}
        alt="A person using yummy mobile app"
        src={registrationImageDesk}
        srcSet={`${registrationImageMob} 285w, ${registrationImageMob2} 570w, ${registrationImageTab} 409w, ${registrationImageTab2} 818w, ${registrationImageDesk} 532w, ${registrationImageDesk2} 1064w`}
        sizes="(min-width: 1280px) 532px, (min-width: 768px) 409px, (min-width: 320px) 285px, 100vw"
      />
      <div className={css.box}>
        {" "}
        <div className={css.formwrap}>
          <h3 className={css.formlabel}>Sign In</h3>
          <form className={css.form} onSubmit={handleSubmit}>
            <label className={css.label}>
              <input
                className={css.input}
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                placeholder="Email"
              />
              <span className={css.iconSpan}>
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  height="24px"
                  width="24px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </span>
            </label>
            <label className={css.label}>
              <input
                className={css.input}
                type="password"
                name="password"
                id="password"
                autoComplete="current-password"
                placeholder="Password"
              />
              <span className={css.iconSpan}>
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  height="24px"
                  width="24px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="3"
                    y="11"
                    width="18"
                    height="11"
                    rx="2"
                    ry="2"
                  ></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
              </span>
            </label>
            <button className={css.submitbutton} type="submit">
              Sign in
            </button>
          </form>
        </div>
        <Link className={css.link} to="/register">
          Registration
        </Link>
      </div>
      <img
        className={css.backgroundimage}
        alt=""
        src={regBgDesk}
        srcSet={`${regBgMob} 285w, ${regBgMob2} 570w, ${regBgTab} 409w, ${regBgTab2} 818w, ${regBgDesk} 532w, ${regBgDesk2} 1064w`}
        sizes="(min-width: 1280px) 532px, (min-width: 768px) 409px, (min-width: 320px) 285px, 100vw"
      />
      {/* <img src="https://github.com/SandraKoch/final-project-group-4/blob/main/client/src/images/backgrounds/registration-background-desktop.png?raw=true" /> */}
    </div>
  );
};
