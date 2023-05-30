import express from "express";
import {
  deleteStudent,
  getAllStudents,
  getStudent,
  registerStudent,
  updateStudent,
} from "../controllers/students.js";
const router = express.Router();
router.get("/", getAllStudents);
router.get("/profile", getStudent);
router.post("/", registerStudent);
router.put("/:id", updateStudent);
router.delete("/:id", deleteStudent);
export default router;
