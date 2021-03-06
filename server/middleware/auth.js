const jwt = require("jsonwebtoken");

async function auth(req, res, next) {
  const token = req.header("x-auth-token");

  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded.user;
      next();
    } catch (error) {
      res.status(400).json({ errors: ["JWT Token is not vaild"] });
    }
  } else {
    res.status(401).json({ errors: ["No token, authorisation denied"] });
  }
}

module.exports = auth;
