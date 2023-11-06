import { useDispatch } from "react-redux";
import css from "./LogoutModal.module.css";
import { logout } from "../../redux/auth/operations";
import { useState } from "react";

export const LogoutModal = () => {
  const dispatch = useDispatch();

  const [toggleLogoutDialog, setToggleLogoutDialog] = useState();

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
  };

  const handleCancel = () => {
    setToggleLogoutDialog((current) => !current);
  };

  return (
    <div className={toggleLogoutDialog ? css.isHidden : css.backdrop}>
      <div className={css.dialogWindow}>
        <div className={css.closeButtonWrap}>
          <button
            className={css.closeButton}
            aria-label="close"
            onClick={handleCancel}
          >
            <span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.75 5.25L5.25 18.75"
                  stroke="#333333"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M18.75 18.75L5.25 5.25"
                  stroke="#333333"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </span>
          </button>
        </div>

        <div>
          <h2 className={css.modalTitle}>Are you sure you want to log out?</h2>
          <div className={css.buttonsWrap}>
            <button
              className={css.logoutButton}
              type="submit"
              onClick={handleLogout}
            >
              Log out
            </button>

            <button
              className={css.cancelButton}
              type="button"
              onClick={handleCancel}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
