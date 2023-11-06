import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { getUserData, updateUser } from "../../redux/auth/operations";
import css from "./UserInfoModal.module.css";
import { useState } from "react";

export const UserInfoModal = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const [toggleDialog, setToggleDialog] = useState();

  const handleCloseBackdrop = () => {
    setToggleDialog((current) => !current);
  };

  const handleClose = () => {
    setToggleDialog(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getUserData());
  };

  const handleSaveChanges = (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    console.log("test");
    console.log(form);
    const newUserData = { name: form.elements.name.value };
    console.log(newUserData);

    dispatch(updateUser({ newUserData }));
  };

  return (
    <div
      onClick={handleCloseBackdrop}
      className={toggleDialog ? css.isHidden : css.backdrop}
    >
      <div className={css.dialogWindow}>
        <div className={css.closeButtonWrap}>
          <button
            className={css.closeButton}
            aria-label="close"
            onClick={handleClose}
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
          <form className={css.form}>
            <label className={css.label}>
              <input type="file" />
              <div className={css.userImgBox}>
                <span className={css.iconSpan}>
                  <svg
                    className={css.iconSvg}
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </span>
              </div>
            </label>
            <div className={css.addIconWrap}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="12" r="12" fill="#8BAA36"></circle>
                <path
                  d="M12 6.75V17.25"
                  stroke="#FAFAFA"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M6.75 12H17.25"
                  stroke="#FAFAFA"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
            <label className={css.nameLabel}>
              <input
                className={css.nameInput}
                placeholder={`${user.name}`}
                id="name"
                label="name"
                type="text"
                name="name"
              />
              <span className={css.personSpan}>
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
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </span>
            </label>
            <button
              className={css.submitbutton}
              onClick={handleSaveChanges}
              type="submit"
            >
              Save changes
            </button>
          </form>

          <button
            className={css.requestbutton}
            onClick={handleSubmit}
            type="button"
          >
            Request personal data from API
          </button>
        </div>
      </div>
    </div>
  );
};
