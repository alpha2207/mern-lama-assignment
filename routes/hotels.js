import express from "express";
import { createHotel, deleteHotel, getAllHotels, getHotel, updateHotel } from "../controllers/hotelsControllers.js";
const router = express.Router();

// Get a Hotel
router.get('/:id', getHotel)
// GET ALL HOTELS
router.get('/', getAllHotels)
// Create a Hotel
router.post('/',createHotel)
// UPDATE A HOTEL
router.put('/:id', updateHotel)
// DELETE A HOTEL
router.delete('/:id',deleteHotel)



export default router;