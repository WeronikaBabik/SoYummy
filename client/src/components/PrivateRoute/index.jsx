import { useAuth } from "../../hooks/useAuth";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ component: Component, redirectTo = "/" }) => {
  const { isLoggedIn, isRefreshing } = useAuth();

  const redirectToRather = !isLoggedIn && !isRefreshing;

  return redirectToRather ? <Navigate to={redirectTo} /> : Component;
};
