import express from "express";
import { login, register } from "../controllers/authControllers.js";
const router = express.Router();


// Register a user
router.post('/register', register);

// Login a user
router.get('/login', login)
// // Create a Hotel
// router.post('/',createHotel)
// // UPDATE A HOTEL
// router.put('/:id', updateHotel)
// // DELETE A HOTEL
// router.delete('/:id',deleteHotel)



export default router;