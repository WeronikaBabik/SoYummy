const { Schema, model } = require("mongoose");
const { ObjectId, String, Number } = Schema.Types;

const recipeIngredientSchema = new Schema(
  {
    id: {
      type: Schema.Types.ObjectId,
      ref: "ingredients",
      required: true,
    },
    measure: {
      type: String,
      required: true,
    },
  },
  { _id: false }
);

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
      required: [true, "Description is required"],
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
      type: [recipeIngredientSchema],
      required: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
      default: [
        {
          id: "640cd5ac2d9fecf12e8897f0",
          thumb:
            "https://www.themealdb.com/images/media/meals/wvpsxx1468256321.jpg",
          title: "Teriyaki Chicken Casserole",
          description:
            "A Japanese-inspired casserole made with chicken, teriyaki sauce, rice, and vegetables.",
          time: 75,
        },
        {
          id: "640cd5ac2d9fecf12e8897f5",
          thumb:
            "https://www.themealdb.com/images/media/meals/wvqpwt1468339226.jpg",
          title: "Mediterranean Pasta Salad",
          description:
            "A salad made with pasta, vegetables (such as tomatoes, cucumbers, and olives), feta cheese, and a dressing made with olive oil and lemon juice.",
          time: 27,
        },
        {
          id: "640cd5ac2d9fecf12e8897f",
          thumb:
            "https://www.themealdb.com/images/media/meals/xxyupu1468262513.jpg",
          title: "Honey Teriyaki Salmon",
          description:
            "A Japanese-inspired dish made with salmon fillets, teriyaki sauce, honey, and sesame seeds.",
          time: 25,
        },
        {
          id: "640cd5ac2d9fecf12e8897f3",
          thumb:
            "https://www.themealdb.com/images/media/meals/rvxxuy1468312893.jpg",
          title: "Vegan Lasagna",
          description:
            "A plant-based version of the classic Italian dish, made with layers of pasta, tomato sauce, vegan cheese, and vegetables (such as spinach, zucchini, and mushrooms).",
          time: 50,
        },
        {
          id: "640cd5ac2d9fecf12e889800",
          thumb:
            "https://www.themealdb.com/images/media/meals/uuxwvq1483907861.jpg",
          title: "Eton Mess",
          description:
            "A traditional English dessert made with whipped cream, meringue, and fresh berries.",
          time: 20,
        },
        {
          id: 6,
          thumb:
            "https://www.themealdb.com/images/media/meals/sxxpst1468569714.jpg",
          title: "Irish stew",
          description:
            "A traditional Irish dish made with lamb, potatoes, carrots, onions, and herbs, cooked in a broth or gravy.",
          time: 160,
        },
      ],
    },
  },
  { versionKey: false, timestamps: true }
);

const Recipes = model("recipes", recipeSchema);

module.exports = { Recipes };
