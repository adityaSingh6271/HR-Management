const express = require("express");
const {
  registerUser,
  loginUser,
  logoutUser,
} = require("../Controller/authController.js");
const authenticate = require("../middlewares/authenticate.js");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);

// Example of a protected route
router.get("/protected", authenticate, (req, res) => {
  res.json({ message: "Access granted", user: req.user });
});

module.exports = router;
