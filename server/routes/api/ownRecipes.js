const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs").promises;
const uploadDir = path.join(process.cwd(), "tmp");
const imgStorage = path.join(process.cwd(), "public/thumbs");
const { v4: uuidv4 } = require("uuid");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
  limits: {
    fileSize: 1048576,
  },
});

const upload = multer({
  storage: storage,
});

const {
  addOwnRecipeHandler,
  deleteOwnRecipeHandler,
  getOwnRecipeHandler,
  imgEdit,
  getOwnRecipeByIdHandler,
} = require("../../controllers/ownRecipes");

const { authMiddleware } = require("../../auth/auth.middleware");

const ownRecipesRouter = express.Router();

ownRecipesRouter.post(
  "/",
  authMiddleware,
  upload.single("picture"),
  async (req, res, next) => {
    try {
      const { path: temporaryName } = req.file;
      // console.log(req.file, temporaryName, originalname);

      const uuid = uuidv4();

      const newImgName = String(uuid) + ".png";
      const fileName = path.join(imgStorage, newImgName);
      await imgEdit(temporaryName, fileName);
      await fs.rm(temporaryName);
      console.log(fileName);
      const onlyFileName = fileName.replace(imgStorage + "\\", "");
      console.log(onlyFileName);
      req.body.thumb = `http://localhost:3001/thumbs/${onlyFileName}`;

      next();

      // Rest of your code for handling file upload and adding the recipe
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  },
  addOwnRecipeHandler
);

ownRecipesRouter.delete("/:recipeId", authMiddleware, deleteOwnRecipeHandler);

ownRecipesRouter.get("/", authMiddleware, getOwnRecipeHandler);

ownRecipesRouter.get("/:recipeId", authMiddleware, getOwnRecipeByIdHandler);

module.exports = { ownRecipesRouter };
