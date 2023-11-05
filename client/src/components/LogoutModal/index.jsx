import { useDispatch, useSelector } from "react-redux";
import css from "./LogoutModal.module.css";
import { selectUser } from "../../redux/auth/selectors";

export const LogoutModal = (props) => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const { open } = props;

  return (
    <div
      className={css.dialogWindow}
      // onClose={handleClose}
      open={open}
    >
      <div className={css.closeButtonWrap}>
        <button
          className={css.closeButton}
          aria-label="close"
          onClick={() => props.onCLose()}
          // onClick={handleClose}
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
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M18.75 18.75L5.25 5.25"
                stroke="#333333"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </span>
        </button>
      </div>

      <div>
        <h2 className={css.modalTitle}>Are you sure you want to log out?</h2>
        <div className={css.buttonsWrap}>
          <button className={css.logoutButton} type="submit">
            Log out
          </button>

          <button className={css.cancelButton} type="button">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
