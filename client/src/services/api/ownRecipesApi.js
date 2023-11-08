import axios from "axios";
axios.defaults.baseURL = process.env.BASE_URL;

export const addOwnRecipe = async (formData) => {
  try {
    const { data } = await axios.post(`/ownRecipes`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return data;
  } catch (error) {
    console.log(error.message);
    return { error };
  }
};

export const getOwnRecipes = async () => {
  try {
    const { data } = await axios.get(`/ownRecipes`);
    if (!data) {
      console.log("No data");
      return;
    }
    return data;
  } catch (error) {
    console.log(error.message);
    return { error };
  }
};

export const deleteOwnRecipe = async (id) => {
  try {
    const { data } = await axios.delete(`/ownRecipes/${id}`);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getOwnRecipeById = async (id) => {
  try {
    const { data } = await axios.get(`ownRecipes/id/${id}`);
    return data;
  } catch (error) {
    console.log(error.message);
    return { error };
  }
};
