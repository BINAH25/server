import express from "express";
import {
  getUser,
  updateUser,
  deleteUser,
  followUser,
  unfollowUser,
  getAllUsers,
} from "../Controllers/UserController.js";

const router = express.Router();
router.get("/:id", getUser);
router.get("/", getAllUsers);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);
router.put("/:id/follow", followUser);
router.put("/:id/unfollow", unfollowUser);

export default router;
