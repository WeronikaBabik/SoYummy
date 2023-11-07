// import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";
// axios.defaults.baseURL = "http://localhost:3001/api";

// export const getOwnRecipes = createAsyncThunk(
//   "myRecipes/all",
//   async (_, thunkAPI) => {
//     try {
//       const res = await axios.get(`/ownRecipes`);
//       return res.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// export const addToOwnRecipes = createAsyncThunk(
//   "myRecipes/add",
//   async ({ id }, thunkAPI) => {
//     try {
//       const res = await axios.post(`/ownRecipes/${id}`);
//       return res.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// export const deleteFromOwnRecipes = createAsyncThunk(
//   "myRecipes/remove",
//   async (id, thunkAPI) => {
//     try {
//       const res = await axios.delete(`/ownRecipes/${id}`);
//       return res.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
// export const getOwnRecipeById = createAsyncThunk(
//   "myRecipes/recipe",
//   async (id, thunkAPI) => {
//     try {
//       const res = await axios.get(`/ownRecipes/${id}`);
//       return res.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
