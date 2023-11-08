import React, { useState } from "react";
import MotivatingModal from "../../Search/SearchComponents/MotivatingModal/MotivatingModal";
import css from "./CheckBoxRecipe.module.css";
import Notiflix from "notiflix";
import {
  addToShoppingListFromRecipe,
  deleteShoppingItemFromRecipe,
} from "../../../services/api/shoppingList";

const CheckBoxRecipe = ({ id, measure }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [motivation, setMotivation] = useState("");

  // const toggleToShopList = async (e) => {
  //   if (isLoading) return;
  //   setIsLoading(true);
  //   const body = { iid: id, number: measure };
  //   console.log(body);
  //   if (e.target.checked) {
  //     await addToShoppingList(body)
  //       .then((data) => {
  //         setMotivation(data.motivation);
  //         toast.success("You added ingredient to shopping list", {
  //           toastId: "123",
  //         });
  //       })
  //       .catch((error) => toast.error(`${error.message}`));
  //     setIsLoading(false);
  //   }

  //   if (!e.target.checked) {
  //     await deleteFromShoppingList(id)
  //       .then((data) =>
  //         toast.info("You removed ingredient from shopping list", {
  //           toastId: "1234",
  //         })
  //       )
  //       .catch((error) => toast.error(`${error.message}`));
  //     setIsLoading(false);
  //   }
  // };
  const toggleToShopList = async (e) => {
    if (isLoading) return;
    setIsLoading(true);
    const body = {
      iid: id,
      number: measure,
    };
    if (e.target.checked) {
      try {
        addToShoppingListFromRecipe(body);
        const data = addToShoppingListFromRecipe(body);
        setIsLoading(false);
        Notiflix.Notify.success("You added ingredient to shopping list");
        setMotivation(data.motivation);
      } catch (error) {
        Notiflix.Notify.failure("Something went wrong by adding ingredients");
      }
    }
    if (!e.target.checked) {
      try {
        deleteShoppingItemFromRecipe(id);
        setIsLoading(false);
        Notiflix.Notify.info("You removed ingredient from shopping list");
      } catch (error) {
        Notiflix.Notify.failure("Something went wrong by removing ingredients");
      }
    }
    setIsLoading(false);
  };
  return (
    <div className={css.wrapper}>
      {motivation === "first" && <MotivatingModal option={1} />}

      <input
        className={css.input}
        type="checkbox"
        id={id}
        name={id}
        onChange={(e) => {
          toggleToShopList(e, { id, measure });
        }}
      />
      <label className={css.label} htmlFor={id}></label>
    </div>
  );
};

export default CheckBoxRecipe;
