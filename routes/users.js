import express from "express";
import { deleteUser, getAllUsers, getUser, updateUser } from "../controllers/usersControllers.js";
const router = express.Router();

// Get a User
router.get('/:id', getUser)
// GET ALL HOTELS
router.get('/', getAllUsers)
// UPDATE A HOTEL
router.put('/:id', updateUser)
// DELETE A HOTEL
router.delete('/:id',deleteUser)

export default router;