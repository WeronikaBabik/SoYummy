import { useDispatch } from "react-redux";
import IconClose from "../Icons/IconClose/IconClose";
import css from "./ShoppingList.module.css";
import {
  deleteFromShoppingList,
  getShoppingList,
} from "../../redux/shoppingList/operations";

const IngredientItem = ({ iid, thb, ttl, number }) => {
  const dispatch = useDispatch();
  const handleDelete = (iid) => {
    dispatch(deleteFromShoppingList(iid));
    dispatch(getShoppingList());
  };
  return (
    <section className={css.ingredient}>
      <div className={css.ingredientWrapper}>
        <div className={css.imageOfIngredient}>
          <img src={thb} alt={ttl} className={css.image} />
        </div>
        <p className={css.nameOfIngredient}>{ttl}</p>
      </div>
      <div className={css.measureWrapper}>
        <p className={css.amountOfIngredient}>{number}</p>
        <button
          type="button"
          onClick={() => handleDelete(iid)}
          className={css.close}
        >
          <IconClose />
        </button>
      </div>
    </section>
  );
};

export default IngredientItem;
