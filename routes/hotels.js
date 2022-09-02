import express from "express";
import Hotel from '../models/hotelModel.js'
const router = express.Router();

// Get a Hotel
router.get('/:id', async (req, res) => {
    try {
        let hotel = await Hotel.findById(req.params.id);
        res.status(200).json({ success: true, hotel });
    }
    catch (err) {
        res.status(500).json(err);
    }
})


// GET ALL HOTELS
router.get('/', async (req, res) => {
    try {
        let hotel = await Hotel.find();
        res.status(200).json({ success: true, hotel });
    }
    catch (err) {
        res.status(500).json(err);
    }
})

// Create a Hotel
router.post('/', async (req, res) => {
    let hotel = new Hotel(req.body);
    try {
        let savedHotel = await hotel.save();
        res.status(200).json({ message: "Hotel Created", savedHotel });
    }
    catch (err) {
        res.status(500).json(err);
    }
})

// UPDATE A HOTEL
router.put('/:id', async (req, res,next) => {

    try {
        let hotel = await Hotel.findByIdAndUpdate(req.params.id,req.body, { new: true });
        res.status(200).json({ success: true, hotel });
    }
    catch (err) {
        res.status(500).json(err);
    }
})

// DELETE A HOTEL
router.delete('/:id', async (req, res) => {
    try {
        await Hotel.findByIdAndDelete(req.params.id);
                res.status(200).json({ success: true, message: "Hotel Deleted Successfully" });
    }
    catch (err) {
        res.status(500).json(err);
    }
})



export default router;