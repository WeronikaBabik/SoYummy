const { Schema, model } = require("mongoose");
const { ObjectId, String, Number } = Schema.Types;

const recipeSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
    },
    category: {
      type: String,
      required: [true, "Category is required"],
    },
    area: {
      type: String,
      default: null,
    },
    instructions: {
      type: String,
      required: [true, "Instructions is required"],
    },
    description: {
      type: String,
      require: [true, "Description is required"],
    },
    thumb: {
      type: String,
      required: [true, "Image is required"],
    },
    preview: {
      type: String,
      default: null,
    },
    time: {
      type: String,
      required: [true, "Time is required"],
    },
    popularity: {
      type: Number,
      default: null,
    },
    favorites: {
      type: Array,
      default: null,
    },

    youtube: {
      type: String,
      default: null,
    },
    tags: {
      type: Array,
      default: null,
    },
    ingredients: {
      type: Array,
      required: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
      // required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

const Recipes = model("recipes", recipeSchema);

module.exports = { Recipes };
