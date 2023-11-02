const express = require("express");
const { signup, login, logout } = require("../controllers/authConroller");
const { getAllUsers } = require("../controllers/userController");

const router = express.Router();

// auth
router.post("/signup", signup);
router.post("/login", login);
router.get("/logout", logout);

// user

router.route("/").get(getAllUsers);

module.exports = router;
