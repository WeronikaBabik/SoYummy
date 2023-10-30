const { Schema, model } = require("mongoose");

const categoriesListSchema = new Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
  },
  thumb: {
    type: String,
    required: [true, "Image is required"],
  },
  description: {
    type: String,
    require: [true, "Description is required"],
  },
});

const CategoriesList = model("categorieslists", categoriesListSchema);

module.exports = { CategoriesList };
