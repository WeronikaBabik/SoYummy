import IngredientItem from "./IngredientItem";
import css from "./ShoppingList.module.css";

const IngredientsShoppingList = () => {
  return (
    <div>
      <section className={css.title}>Shopping list</section>
      <div className={css.head}>
        <p className={css.leftHead}>Product</p>
        <div className={css.rightHead}>
          <p>Number</p>
          <p>Remove</p>
        </div>
      </div>
      <div className={css.ingredients}>
        Ingredients from RecipeIngredientsList
        <IngredientItem />
      </div>
    </div>
  );
};

export default IngredientsShoppingList;
