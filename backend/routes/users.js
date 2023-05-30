import express from "express";
import {
  deleteUser,
  getAllUsers,
  getUser,
  registerUser,
  updateUser,
} from "../controllers/users.js";
const router = express.Router();
router.get("/", getAllUsers);
router.get("/profile", getUser);
router.post("/", registerUser);
router.put('/:id', updateUser);
router.delete("/:id", deleteUser);
export default router;