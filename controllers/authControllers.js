import User from '../models/userModel.js';
import bcrypt from 'bcryptjs';

export const register = async (req, res,next) => {
    let { username, email, password } = req.body;
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    let user = new User({
        username,
        email,
        password : hash
    });
    try {
        let savedUser = await user.save();
        res.status(201).json({ message: "User Created", savedUser });
    }
    catch (err) {
        next(500, err);
    }
}


// export const getHotel = async (req, res) => {
//     try {
//         let hotel = await Hotel.findById(req.params.id);
//         res.status(200).json({ success: true, hotel });
//     }
//     catch (err) {
//         next(500,err);
//     }
// }

// export const getAllHotels = async (req, res) => {
//     try {
//         let hotel = await Hotel.find();
//         res.status(200).json({ success: true, hotel });
//     }
//     catch (err) {
//         next(500,err);
//     }
// }

// export const updateHotel =async (req, res,next) => {

//     try {
//         let hotel = await Hotel.findByIdAndUpdate(req.params.id,req.body, { new: true });
//         res.status(200).json({ success: true, hotel });
//     }
//     catch (err) {
//         next(500,err);
//     }
// }

// export const deleteHotel =  async (req, res) => {
//     try {
//         await Hotel.findByIdAndDelete(req.params.id);
//                 res.status(200).json({ success: true, message: "Hotel Deleted Successfully" });
//     }
//     catch (err) {
//         next(500,err);
//     }
// }