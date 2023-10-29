import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import Loader from '../Loader/Loader';
import UserLogo from '../UserLogo/UserLogo';

const SharedLayout = () => {
    return (
        <>
            <header>
                <h1>Hello from Header</h1>
            <Link to="/">Main</Link>
                <nav>
                    <Link to="/categories/:categoryName">Categories</Link>
                    <Link to="/add">Add recipes</Link>
                    <Link to="/my">My recipes</Link>
                    <Link to="/favorite">Favorites</Link>
                    <Link to="/shopping-list">Shopping list</Link>
                    <Link to="/search">S</Link>
                </nav>
            <UserLogo />
            </header>
            <Suspense fallback={<Loader />} >
                <Outlet />
            </Suspense>
            <footer>Footer</footer>
        </>
    );
};

export default SharedLayout;