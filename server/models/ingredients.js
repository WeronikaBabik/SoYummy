const { Schema, model } = require("mongoose");

const ingredientSchema = new Schema({
  ttl: {
    type: String,
    required: [true, "Title is required"],
  },
  desc: {
    type: String,
    require: [true, "Description is required"],
  },
  t: {
    type: String,
    default: "",
  },
  thb: {
    type: String,
    required: [true, "Image is required"],
  },
});

const Ingredients = model("ingredients", ingredientSchema);

module.exports = Ingredients;