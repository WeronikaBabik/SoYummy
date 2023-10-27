const express = require("express");
const cors = require("cors");
const router = require("./routes/api/users");
// const swaggerUi = require("swagger-ui-express");
// const swaggerDocument = require("./swagger.json");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api", router);
// app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

module.exports = {
  app,
};
