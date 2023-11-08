import { lazy } from "react";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useAuth } from "./hooks/useAuth";
import { refreshToken } from "./redux/auth/authSlice";
import { useEffect } from "react";
import SharedLayout from "./components/SharedLayout/SharedLayout";
import Loader from "./components/Loader/Loader";
import NotFound from "./components/NotFound/NotFound";
import { Categories } from "./pages/Categories/Categories";
import FavoritePage from "./pages/FavoritePage/FavoritePage";
import { Search } from "./components/Search/Search";
import { RestrictedRoute } from "./components/RestrictedRoute";
import Home from "./pages/Home";
import { PrivateRoute } from "./components/PrivateRoute";

const Register = lazy(() => import("./pages/RegisterPage"));
const Signin = lazy(() => import("./pages/SigninPage"));
// const Categories = lazy(() => import("..."));
const AddRecipe = lazy(() => import("./pages/AddRecipePage/AddRecipePage"));
const MyRecipes = lazy(() => import("./pages/MyRecipes"));
// const Favorite = lazy(() => import('...'));
const ShoppingList = lazy(() => import("./pages/ShoppingList"));
// const Search = lazy(() => import('...'));
const RecipiesPage = lazy(() => import("./pages/RecipiesPage"));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshToken());
  }, [dispatch]);

  return isRefreshing ? (
    <div>
      <div>Refreshing user...</div>
      <Loader />
    </div>
  ) : (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route
          path="register"
          element={<RestrictedRoute redirectTo="/" component={<Register />} />}
        />
        <Route
          path="signin"
          element={<RestrictedRoute redirectTo="/" component={<Signin />} />}
        />
        <Route
          path="/add"
          element={<PrivateRoute redirectTo="/" component={<AddRecipe />} />}
        />
        <Route
          path="/favorite"
          element={<PrivateRoute redirectTo="/" component={<FavoritePage />} />}
        />
        <Route
          path="/categories/:category"
          element={<PrivateRoute redirectTo="/" component={<Categories />} />}
        />
        <Route
          path="/my"
          element={<PrivateRoute redirectTo="/" component={<MyRecipes />} />}
        />
        <Route
          path="/search"
          element={<PrivateRoute redirectTo="/" component={<Search />} />}
        />
        <Route
          path="/shopping-list"
          element={<PrivateRoute redirectTo="/" component={<ShoppingList />} />}
        />
        <Route
          path="/categories/:categoryName"
          element={<PrivateRoute redirectTo="/" component={<Categories />} />}
        />
        <Route
          path="/recipe/:recipeId"
          element={<PrivateRoute component={<RecipiesPage />} />}
        />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
