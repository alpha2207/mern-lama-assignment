import Hotel from '../models/hotelModel.js';

export const getHotel = async (req, res) => {
    try {
        let hotel = await Hotel.findById(req.params.id);
        res.status(200).json({ success: true, hotel });
    }
    catch (err) {
        next(500,err);
    }
}

export const getAllHotels = async (req, res) => {
    try {
        let hotel = await Hotel.find();
        res.status(200).json({ success: true, hotel });
    }
    catch (err) {
        next(500,err);
    }
}

export const createHotel = async (req, res) => {

    let hotel = new Hotel(req.body);
    try {
        let savedHotel = await hotel.save();
        res.status(200).json({ message: "Hotel Created", savedHotel });
    }
    catch (err) {
        next(500,err);
    }
}

export const updateHotel =async (req, res,next) => {

    try {
        let hotel = await Hotel.findByIdAndUpdate(req.params.id,req.body, { new: true });
        res.status(200).json({ success: true, hotel });
    }
    catch (err) {
        next(500,err);
    }
}

export const deleteHotel =  async (req, res) => {
    try {
        await Hotel.findByIdAndDelete(req.params.id);
                res.status(200).json({ success: true, message: "Hotel Deleted Successfully" });
    }
    catch (err) {
        next(500,err);
    }
}