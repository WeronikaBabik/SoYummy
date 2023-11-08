import { useDispatch, useSelector } from "react-redux";
import IconClose from "../Icons/IconClose/IconClose";
import css from "./ShoppingList.module.css";
import {
  deleteFromShoppingList,
  getShoppingList,
} from "../../redux/shoppingList/operations";
import Notiflix from "notiflix";

const IngredientItem = (item) => {
  const dispatch = useDispatch();

  const handleDelete = (item) => {
    const body = {
      iid: item.iid,
    };
    dispatch(deleteFromShoppingList(body));
    Notiflix.Notify.info(`You removed ${item.ttl} from shopping list`);
    dispatch(getShoppingList());
  };
  return (
    <section className={css.ingredient}>
      <div className={css.ingredientWrapper}>
        <div className={css.imageOfIngredient}>
          <img src={item.thb} alt={item.ttl} className={css.image} />
        </div>
        <p className={css.nameOfIngredient}>{item.ttl}</p>
      </div>
      <div className={css.measureWrapper}>
        <p className={css.amountOfIngredient}>{item.number}</p>
        <button
          type="button"
          onClick={() => handleDelete(item)}
          className={css.close}
        >
          <IconClose />
        </button>
      </div>
    </section>
  );
};

export default IngredientItem;
