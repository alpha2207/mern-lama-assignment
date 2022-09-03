import express from "express";
import { login, register } from "../controllers/authControllers.js";
const router = express.Router();


// Register a user
router.post('/register', register);

// Login a user
router.get('/login', login)



export default router;