const jwt = require("jsonwebtoken");
const { Admin } = require('../db/index.js');
const SecretPassword = "secret";
// Middleware for handling auth
async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
  const authorization = req.headers.authorization;
  const token = authorization.replace('Bearer ', '');

  try {
    const verify = jwt.verify(token, SecretPassword);
    next();
  } catch(e) {
    res.status(404).send("Admin doesn't exist");
  }
}

module.exports = adminMiddleware;
