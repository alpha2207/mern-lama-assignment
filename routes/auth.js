import express from "express";
import { register } from "../controllers/authControllers.js";
const router = express.Router();


// Register a user
router.post('/register', register);

// // GET ALL HOTELS
// router.get('/', getAllHotels)
// // Create a Hotel
// router.post('/',createHotel)
// // UPDATE A HOTEL
// router.put('/:id', updateHotel)
// // DELETE A HOTEL
// router.delete('/:id',deleteHotel)



export default router;