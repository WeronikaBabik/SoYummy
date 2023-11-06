import { useDispatch, useSelector } from "react-redux";
import IngredientItem from "./IngredientItem";
import css from "./ShoppingList.module.css";
import { useEffect, useState } from "react";
import {
  deleteFromShoppingList,
  getShoppingList,
} from "../../redux/shoppingList/operations";
import {
  isLoadingSelector,
  shoppingListSelector,
} from "../../redux/shoppingList/selectors";
import Loader from "../Loader/Loader";
import { EmptyShoppingList } from "./EmptyShoppingList";

const IngredientsShoppingList = () => {
  const dispatch = useDispatch();
  const shoppingList = useSelector(shoppingListSelector);
  const isLoading = useSelector(isLoadingSelector);
  const [list, setList] = useState(null);
  useEffect(() => {
    if (shoppingList.length <= 0 && list === null) {
      dispatch(getShoppingList());
    }
    setList(shoppingList);
  }, [dispatch, shoppingList]);

  return (
    <div className={css.shoppingList}>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={css.container}>
          {shoppingList.length > 0 && (
            <section>
              <div className={css.head}>
                <p className={css.leftHead}>Product</p>
                <div className={css.rightHead}>
                  <p>Number</p>
                  <p>Remove</p>
                </div>
              </div>
            </section>
          )}
          {shoppingList.length === 0 ? (
            <EmptyShoppingList />
          ) : (
            <div className={css.ingredients}>
              {shoppingList?.map(({ iid, thb, ttl, number, _id }) => (
                <IngredientItem
                  iid={iid}
                  thb={thb}
                  ttl={ttl}
                  number={number}
                  key={_id}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default IngredientsShoppingList;
