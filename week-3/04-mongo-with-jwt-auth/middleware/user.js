const jwt = require("jsonwebtoken");
const { User } = require('../db/index.js');
const SecretPassword = "secret";
// Middleware for handling auth
async function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the admin DB. Check readme for the exact headers to be expected
  const authorization = req.headers.authorization;
  const token = authorization.replace('Bearer ', '');

  try {
    const verify = jwt.verify(token, SecretPassword);
    const username = verify.username;
    req.username = username;
    next();
  } catch(e) {
    res.status(404).send("User doesn't exist");
  }
}

module.exports = userMiddleware;
