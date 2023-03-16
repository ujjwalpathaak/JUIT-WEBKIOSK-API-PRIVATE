import express from "express";
const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

import Login from "../controllers/getLogin.js";
import PersonalDetails from "../controllers/getPersonalDetails.js";
import Attendance from "../controllers/getAttendance.js";
import Subjects from "../controllers/getSubjects.js";
import Faculty from "../controllers/getFaculty.js";
import Marks from "../controllers/getMarks.js";
import Gpa from "../controllers/getGpa.js";

//Base get to URL
router.get("/", (req, res) => {
  res.send("API Working");
});

// Check Login
router.post("/login", Login);

// Get Personal Details
router.post("/personaldetails", PersonalDetails);

// Get Attendance
router.post("/attendance", Attendance);

// Get Subjects
router.post("/subjects", Subjects);

// Get Faculty
router.post("/faculty", Faculty);

// Get Marks
router.post("/marks", Marks);

// Get Gpa
router.post("/gpa", Gpa);

export default router;
