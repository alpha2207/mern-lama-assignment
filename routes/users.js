import express from "express";
import { deleteUser, getAllUsers, getUser, updateUser } from "../controllers/usersControllers.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";
const router = express.Router();

// Get a User
router.get('/:id', verifyUser, getUser)
// UPDATE A USER
router.put('/:id', verifyUser, updateUser)
// DELETE A USER
router.delete('/:id', verifyUser, deleteUser)
// GET ALL USERS
router.get('/', verifyAdmin, getAllUsers)

export default router;