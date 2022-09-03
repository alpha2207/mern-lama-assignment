import express from "express";
import { createHotel, deleteHotel, getAllHotels, getHotel, updateHotel } from "../controllers/hotelsControllers.js";
import { verifyAdmin } from "../utils/verifyToken.js";
const router = express.Router();

// Get a Hotel
router.get('/:id', getHotel)
// GET ALL HOTELS
router.get('/', getAllHotels)
// Create a Hotel
router.post('/',verifyAdmin,createHotel)
// UPDATE A HOTEL
router.put('/:id',verifyAdmin, updateHotel)
// DELETE A HOTEL
router.delete('/:id',verifyAdmin,deleteHotel)



export default router;