// import logo from './logo.svg';
import './App.css';
import {lazy} from 'react';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from './components/SharedLayout/SharedLayout';
// import Loader from './components/Loader/Loader';
import NotFound from './components/NotFound/NotFound';

const Main = lazy(() => import('./pages/Main/Main'));
// const Categories = lazy(() => import('...'));
// const AddRecipe = lazy(() => import('...'));
// const MyRecipes = lazy(() => import('...'));
// const Favorite = lazy(() => import('...'));
// const ShoppingList = lazy(() => import('...'));
// const Search = lazy(() => import('...'));

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Main />} />
        {/* <Route path="/categories/:categoryName" element={<Categories />} />
        <Route path="/add" element={<AddRecipe />} />
        <Route path="/my" element={<MyRecipes />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/shopping-list" element={<ShoppingList />} />
        <Route path="/search" element={<Search />} /> */}
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
