import { BackgroundTop } from "../components/CommonComponents/Background/Background";
import PageTitle from "../components/CommonComponents/Title/PageTitle";
import IngredientsShoppingList from "../components/ShoppingList/IngredientsShoppingList";

const ShoppingList = () => {
  return (
    <div>
      <BackgroundTop />
      <PageTitle>Shopping list</PageTitle>
      <IngredientsShoppingList />;
    </div>
  );
};

export default ShoppingList;
