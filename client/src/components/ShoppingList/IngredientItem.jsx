import css from "./ShoppingList.module.css";

const IngredientItem = ({ ingredient, handleDelete }) => {
  const { id, ttl, measure, thb } = ingredient;
  return (
    <section className={css.ingredient}>
      <div className={css.imageOgIngredient}>
        <img src={thb} alt="ttl" />
      </div>
      <p className={css.nameOfIngredient}>{ttl}</p>
      <p className={css.amountOfIngredient}>{measure}</p>
      <button type="button" onClick={() => handleDelete(id)}>
        Delete
      </button>
    </section>
  );
};

export default IngredientItem;
