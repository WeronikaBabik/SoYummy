import css from "./ShoppingList.module.css";

const IngredientItem = () => {
  return (
    <section className={css.ingredient}>
      <p className={css.imageOgIngredient}>image</p>
      <p className={css.nameOfIngredient}>name of the ingredient</p>
      <p className={css.amountOfIngredient}>amount</p>
      <button type="button">Delete</button>
    </section>
  );
};

export default IngredientItem;
