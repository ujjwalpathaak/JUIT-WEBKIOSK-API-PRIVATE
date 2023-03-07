import express from "express";
const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

import Login from "../controllers/Login.js";
import PersonalDetails from "../controllers/PersonalDetails.js";

//Base get to URL
router.get("/", (req, res) => {
  res.send("API Working");
});

// Check Login
router.post("/login", Login);

// Get Personal Details
router.post("/personaldetails", PersonalDetails);

export default router;
