// import React, { useState } from "react";
// import css from "./RecipeIngredientsFields.module.css";
// import { useSelector, useDispatch } from "react-redux";
// import {
//   addIngredient,
//   removeIngredient,
// } from "../../redux/CategoriesRedux/recipesSlice";
// import { increment, decrement } from "../../redux/CategoriesRedux/counterSlice";
// import { selectCount, selectIngredients } from "../../redux/selectors";
// import { getIngredientByLetter } from "../../redux/CategoriesRedux/recipesSlice";

// export const RecipeIngredientsFields = () => {
//   const dispatch = useDispatch();
//   const ingredients = useSelector(selectIngredients);
//   const [newIngredient, setNewIngredient] = useState("");
//   const count = useSelector(selectCount);
//   const [searchLetter, setSearchLetter] = useState("");

//   const handleSearchLetterChange = (e) => {
//     const { value } = e.target;
//     setSearchLetter(value);
//     dispatch(getIngredientByLetter(value));
//   };

//   const handleAddIngredient = () => {
//     dispatch(addIngredient(newIngredient));
//     setNewIngredient("");
//   };

//   const handleRemoveIngredient = () => {
//     dispatch(removeIngredient());
//   };

//   return (
//     <div
//       style={{
//         display: "flex",
//         justifyContent: "baseline",
//         marginLeft: "100px",
//         marginTop: "104px",
//       }}
//     >
//       <h3 style={{ marginRight: "362px" }}>Ingredients</h3>
//       <div className={css.counter}>
//         <button onClick={() => dispatch(decrement())} className={css.decrement}>
//           -
//         </button>
//         <span>{count}</span>
//         <button onClick={() => dispatch(increment())} className={css.increment}>
//           +
//         </button>
//       </div>
//       <input
//         type="text"
//         placeholder="Find the ingredient"
//         value={searchLetter}
//         onChange={handleSearchLetterChange}
//       />
//       <select>
//         {ingredients.map((ingredient) => (
//           <option key={ingredient.id} value={ingredient.ttl}>
//             {ingredient.ttl}
//           </option>
//         ))}
//       </select>
//     </div>
//   );
// };

// export default RecipeIngredientsFields;

// // function RecipeIngredientsField(props) {
// //   const [counter, setCounter] = useState(1);
// //   const [ingredients, setIngredients] = useState([
// //     { id: 0, ingredient: '', quantity: 1, measure: 'tbs' },
// //   ]);

// //   const dispatch = useDispatch();

// //   const ingredientsList = useSelector(selectIngredients);

// //   useEffect(() => {
// //     if (!ingredientsList || ingredientsList?.length === 0) {
// //       dispatch(getAllIngredients());
// //     }
// //   }, [dispatch, ingredientsList]);

// //   const measureList = ['tbs', 'tsp', 'kg', 'g'];

// //   const ingredientSelectList = ingredientsList.map(option => ({
// //     value: option._id,
// //     label: option.ttl,
// //   }));

// //   const handleIngredientInputChange = (value, index) => {
// //     const newArray = [...ingredients];
// //     newArray[index].ingredient = value;
// //     setIngredients(newArray);
// //     props.funct(newArray);
// //   };

// //   const handleMeasureInputChange = (value, index) => {
// //     const newArray = [...ingredients];
// //     newArray[index].measure = value;
// //     setIngredients(newArray);
// //     props.funct(newArray);
// //   };

// //   const handleQuantityInputChange = (value, index) => {
// //     const newArray = [...ingredients];
// //     newArray[index].quantity = value;
// //     setIngredients(newArray);
// //     props.funct(newArray);
// //   };

// //   function decrement() {
// //     if (counter > 1) {
// //       let result = counter - 1;
// //       const newArray = [...ingredients];
// //       newArray.pop();
// //       setCounter(result);
// //       setIngredients(newArray);
// //       props.funct(newArray);
// //     }
// //   }

// //   function increment() {
// //     let result = counter + 1;
// //     const newArray = [...ingredients];
// //     newArray.push({
// //       id: uuidv4(),
// //       ingredient: '',
// //       quantity: 1,
// //       measure: 'tbs',
// //     });
// //     setCounter(result);
// //     setIngredients(newArray);
// //     props.funct(newArray);
// //   }

// //   function deleteItem(id) {
// //     const index = ingredients.findIndex(option => option.id === id);
// //     if (index !== -1) {
// //       const newArray = [...ingredients];
// //       newArray.splice(index, 1);
// //       setIngredients(newArray);
// //       setCounter(newArray.length);
// //       props.funct(newArray);
// //     }
// //   }

// //   return (
// //     <div>
// //       <div>
// //         <p>Ingredients</p>
// //         <button
// //           type="button"
// //           disabled={counter < 2}
// //           onClick={decrement}
// //         >
// //           -
// //         </button>
// //         <span>{counter}</span>
// //         <button
// //           type="button"
// //           onClick={increment}
// //           style={{ color: '#8BAA36' }}
// //         >
// //           +
// //         </button>
// //       </div>
// //       {ingredients.map((item, index) => {
// //         return (
// //           <div key={item.id}>
// //             <Input
// //               type="text"
// //               name={`ingredients[${index}].ingredient`}
// //               value={item.ingredient}
// //               onChange={e => handleIngredientInputChange(e.target.value, index)}
// //             />
// //             <Input
// //               type="text"
// //               name={`ingredients[${index}].quantity`}
// //               value={item.quantity}
// //               onChange={e => handleQuantityInputChange(e.target.value, index)}
// //             />
// //             <select
// //               name={`ingredients[${index}].measure`}
// //               value={item.measure}
// //               onChange={e => handleMeasureInputChange(e.target.value, index)}
// //             >
// //               {measureList.map(option => (
// //                 <option key={option} value={option}>
// //                   {option}
// //                 </option>
// //               ))}
// //             </select>
// //             <button
// //               type="button"
// //               disabled={counter < 2}
// //               onClick={() => deleteItem(item.id)}
// //             >
// //               X
// //             </button>
// //           </div>
// //         );
// //       })}
// //     </div>
// //   );
// // }
