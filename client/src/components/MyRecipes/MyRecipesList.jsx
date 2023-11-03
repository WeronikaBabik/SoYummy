import { deleteMyRecipe, getMyRecipes } from "../../services/api/recipesAPI";
import { Notify, Notiflix } from "notiflix";

const { useState, useEffect } = require("react");
const { default: Loader } = require("../Loader/Loader");
const { default: MyRecipesItem } = require("./MyRecipesItem");

const MyRecipesList = () => {
  const [myRecipes, setMyRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const handleDelete = async (id) => {
    try {
      setIsLoading(true);
      await deleteMyRecipe(id);
      const { recipes } = await getMyRecipes();
      setMyRecipes(recipes);
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    const recipesFromApi = async () => {
      try {
        setIsLoading(true);
        const { recipes } = await getMyRecipes();
        setMyRecipes(recipes);
      } catch (e) {
        console.error(e);
        Notiflix.Notify.warning("There no recipes or something went wrong");
      } finally {
        setIsLoading(false);
      }
    };
    recipesFromApi();
  });
  return (
    <section>
      {isLoading && <Loader />}
      {myRecipes.length === 0 && !isLoading && <p>There no recipes</p>}
      {myRecipes.length > 0 && !isLoading && (
        <div>
          {myRecipes.map(({ _id, title, description, preview, time }) => (
            <MyRecipesItem
              key={_id}
              description={description}
              preview={preview}
              time={time}
              title={title}
              id={_id}
              handleDelete={handleDelete}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default MyRecipesList;