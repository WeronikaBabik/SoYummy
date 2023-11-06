import { Link } from "react-router-dom";
import s from "./PreviewCategories.module.css";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectRecipes, selectSelectedCategory } from "../../redux/selectors";

const PreviewCategories = ({ selectedCategory }) => {
    const [isLoading, setIsLoading] = useState(false);
    const allRecipes = useSelector(selectRecipes);

    // Ilość przepisów na stronie
    const [recipesPerPage, setRecipesPerPage] = useState(1);

    const determineRecipesPerPage = () => {
        if (window.innerWidth >= 1280) {
            return 4;
        } else if (window.innerWidth >= 768) {
            return 2;
        } else {
            return 1;
        }
    };

    const [currentPage, setCurrentPage] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            setRecipesPerPage(determineRecipesPerPage());
        };

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const startIndex = currentPage * recipesPerPage;
    const endIndex = startIndex + recipesPerPage;

    // Filtruj przepisy na podstawie wybranej kategorii
    const recipesByCategory = allRecipes.filter((recipe) => recipe.category === selectedCategory);

    // const totalPages = Math.ceil(recipesByCategory.length / recipesPerPage);
    const recipesToDisplay = recipesByCategory.slice(startIndex, endIndex);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        window.scrollTo(0, 0);
    };

    return (
        <div className={s.preview__categories}>
            <div className={s.recipes__box}>
                {isLoading ? (
                    <p>Loader...</p>
                ) : recipesToDisplay.length > 0 ? (
                    recipesToDisplay.map((recipe, index) => (
                        <div className={s.recipe__card} key={index}>
                            <img src={recipe.thumb} alt={recipe.title} className={s.recipe__img} />
                            <Link to={`/recipe/${recipe.id}`} className={s.recipe__btn}>
                                <span className={s.btn__text}>{recipe.title}</span>
                            </Link>
                        </div>
                    ))
                ) : (
                    <p>No recipes found</p>
                )}
            </div>
        </div>
    );
};

export default PreviewCategories;
