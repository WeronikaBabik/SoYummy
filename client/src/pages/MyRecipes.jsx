import { BackgroundTop } from "../components/CommonComponents/Background/Background";
import PageTitle from "../components/CommonComponents/Title/PageTitle";
import MyRecipesList from "../components/MyRecipes/MyRecipesList";

const MyRecipes = () => {
  return (
    <>
      <BackgroundTop />
      <PageTitle>My recipes</PageTitle>
      <MyRecipesList />
    </>
  );
};

export default MyRecipes;
