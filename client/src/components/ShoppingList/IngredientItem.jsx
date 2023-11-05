import IconClose from "../Icons/IconClose/IconClose";
import css from "./ShoppingList.module.css";

const IngredientItem = ({ ingredient, handleDelete }) => {
  const { id, ttl, number, thb } = ingredient;
  return (
    <section className={css.ingredient}>
      <div className={css.ingredientWrapper}>
        <div className={css.imageOgIngredient}>
          <img src={thb} alt="ttl" className={css.image} />
        </div>
        <p className={css.nameOfIngredient}>{ttl}</p>
      </div>
      <div className={css.measureWrapper}>
        <p className={css.amountOfIngredient}>{number}</p>
        <button
          autofocus
          onClick={() => handleDelete(id)}
          className={css.close}
        >
          <IconClose />
        </button>
      </div>
    </section>
  );
};

export default IngredientItem;
