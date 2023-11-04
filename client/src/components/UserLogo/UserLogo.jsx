import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/auth/operations";
import css from "./UserLogo.module.css";
import { selectUser } from "../../redux/auth/selectors";

const UserLogo = () => {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const user = useSelector(selectUser);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = (e) => {
    setAnchorEl(null);
  };

  const handleLogout = (e) => {
    dispatch(logout());
    setAnchorEl(null);
  };

  // modal - dialog
  const [openDialog, setOpenDialog] = useState(false);

  const handleEdit = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <>
      <div className={css.userLogo}>
        {/* <symbol id="icon-user" viewBox="0 0 32 32"> */}
        <button className={css.userImg} onClick={handleClick}>
          <svg></svg>
        </button>
        {/* <img src="" alt="user avatar" className={css.userImg} /> */}
        <p className={css.text}>Username</p>
      </div>

      <div
        anchorEl={anchorEl}
        className={css.userLogoModal}
        onClose={handleClose}
      >
        <div>
          <p>Edit Profile</p>
          <button onClick={handleEdit}>I</button>
        </div>
        <button onClick={handleLogout}>
          <span>Logout</span>
        </button>
      </div>

      {/* <EditDialog open={openDialog} onCLose={handleCloseDialog} /> */}
    </>
  );
};

export default UserLogo;
