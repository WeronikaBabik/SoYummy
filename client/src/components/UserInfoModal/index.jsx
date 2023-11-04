import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { getUserData, updateUser } from "../../redux/auth/operations";
import css from "./UserInfoModal.module.css";

export const UserInfoModal = (props) => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

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

  const { open } = props;

  return (
    <div
      className={css.dialogWindow}
      // onClose={handleClose}
      open={open}
    >
      <h3>Your account data</h3>
      <button
        aria-label="close"
        onClick={() => props.onCLose()}
        // onClick={handleClose}
      >
        X
      </button>

      <div>
        <form>
          {/* <p>{user.name}</p> */}
          <input
            placeholder={`${user.name}`}
            id="name"
            // label="name"
            type="text"
            name="name"
          />
          <button onClick={handleSaveChanges} type="submit">
            Save changes
          </button>
        </form>

        <button onClick={handleSubmit} type="button">
          Request personal data from API
        </button>
      </div>
    </div>
  );
};
