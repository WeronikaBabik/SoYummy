const jwt = require("jsonwebtoken");
const { secretJwt } = require("../config");
const invalidTokens = new Set();

const invalidateToken = (token) => invalidTokens.add(token);
const isTokenInvalidated = (token) => invalidTokens.has(token);

const tokenFromHeaders = (headers) => {
  return headers.authorization?.replace("Bearer ", "");
};

const authMiddleware = async (req, res, next) => {
  try {
    const token = tokenFromHeaders(req.headers);
    console.log("auth", token);

    const decodedToken = jwt.verify(token, secretJwt);
    const userId = decodedToken.userId;
    console.log("auth userId", userId);

    if (!decodedToken || isTokenInvalidated(token)) {
      res.status(401).json({
        status: "Unauthorized",
        code: 401,
        message: "Not authorized",
      });
    } else {
      req.userId = userId;
      req.token = token;
      next();
    }
  } catch (error) {
    return res.status(401).send({ message: error.message });
  }
};

module.exports = {
  authMiddleware,
  invalidateToken,
  isTokenInvalidated,
};
