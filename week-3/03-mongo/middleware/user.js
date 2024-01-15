const { User } = require('../db/index.js');
// Middleware for handling auth
async function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the admin DB. Check readme for the exact headers to be expected
  const username = req.headers.username;
  const password = req.headers.password;

  const existingUser = await User.findOne({username: username, password: password});
  if (existingUser) {
    req.user = existingUser;
    next();
  } else {
    res.status(404).send("User doesn't exist");
  }
}

module.exports = userMiddleware;
