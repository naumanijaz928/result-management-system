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
router.post("/", registerUser);
router.get("/profile", getUser);
router.put('/:id', updateUser);
router.delete("/:id", deleteUser);
export default router;
