const express = require("express");
const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

const { Login } = require("../functions/Login.js");

//Base get to URL
router.get("/", (req, res) => {
  res.send("API Working");
});

// Check Login
router.post("/login", Login);

module.exports = { router };
