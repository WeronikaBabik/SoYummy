import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import СhooseYourBreakfast from "../../components/СhooseYourBreakfast/СhooseYourBreakfast";
import SearchComponent from "../../components/SearchComponent/SearchComponent";
import PreviewCategories from "../../components/PreviewCategories/PreviewCategories";
import s from "./Main.module.css";

const Main = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const ingredientName = searchParams.get("name") ?? "";

    const updateQueryString = (name) => {
        const nextParams = name !== "" ? { name } : {};
        setSearchParams(nextParams);
    };

    return (
        <div className={s.main}>
            <div className={s.heroHeader}>
                <h1 className={s.heroHeaderHeading}><span>So</span>Yummy</h1>
                <p className={s.heroHeaderDescription}>
                    "What to cook?" is not only a recipe app, it is, in fact, your cookbook. You can add your own recipes to save them for the future.
                </p>
                <SearchComponent value={ingredientName} onChange={updateQueryString} />
                <СhooseYourBreakfast />
            </div>
            <div className={s.previewCategories}>
                <PreviewCategories selectedCategory="Breakfast" title="Breakfast" params="breakfast" />
                <PreviewCategories selectedCategory="Miscellaneous" title="Miscellaneous" params="miscellaneous" />
                <PreviewCategories selectedCategory="Chicken" title="Chicken" params="chicken" />
                <PreviewCategories selectedCategory="Dessert" title="Desserts" params="dessert" />
            </div>
            <div className={s.other_categories_container}>
                <Link to="/categories/:categoryName" className={s.other_categories}>
                    Other categories
                </Link>
            </div>
        </div>
            
    );
};

export default Main;