import "./App.css";
import { Route, Routes } from "react-router-dom";
import ShoppingList from "./pages/ShoppingList";
import { useDispatch } from "react-redux";
import { useAuth } from "./hooks/useAuth";
import { refreshToken } from "./redux/auth/authSlice";
import { useEffect } from "react";
import Home from "./pages/Home";

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshToken());
  }, [dispatch]);

  return isRefreshing ? (
    <div>Refreshing user...</div>
  ) : (
    <Routes>
      {/* <Route path="/" element={<CommonLayout />}> */}
      <Route index element={<Home />} />
      <Route path="/shopping-list" element={<ShoppingList />}></Route>
      {/* </Route> */}
    </Routes>
  );
};
