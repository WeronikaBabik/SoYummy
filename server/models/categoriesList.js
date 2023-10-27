const { Schema, model } = requaire("mongoose");

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

const Categorylist = model("categorieslists", categoriesListSchema);

module.exports = Categorylist;
