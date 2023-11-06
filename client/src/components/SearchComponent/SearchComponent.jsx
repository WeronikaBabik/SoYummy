import { Link } from "react-router-dom";
import s from "./SearchComponent.module.css";

const SearchComponent = ({value, onChange}) => {
    return (
        <form className={s.formSearch}>
            <div className={s.formSearchLabel}>
                <input type="text"
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    placeholder="Beef"
                    className={s.formSearchInput}>
                </input>
                <Link className={s.formSearchButton} to="/search">Search</Link>
            </div>
        </form>
    );
};

export default SearchComponent;