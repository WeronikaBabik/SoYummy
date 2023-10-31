const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  serverPort: process.env.PORT || 3001,
  mongoConnection: process.env.MONGO_URL,
  secretJwt: process.env.JWT_KEY,
};
