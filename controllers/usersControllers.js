import User from '../models/userModel.js';
import { errorHandler } from '../utils/error.js';

export const getUser = async (req, res,next) => {
    try {
        let user = await User.findById(req.params.id);
        res.status(200).json({ success: true, user });
    }
    catch (err) {
        next(errorHandler(500, err));
    }
}

export const getAllUsers = async (req, res,next) => {
    try {
        let user = await User.find();
        res.status(200).json({ success: true, user });
    }
    catch (err) {
        next(errorHandler(500, err));
    }
}

export const updateUser = async (req, res, next) => {
    try {
        let user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json({ success: true, user });
    }
    catch (err) {
        next(errorHandler(500, "Internal Server Error"));
    }
}

export const deleteUser = async (req, res,next) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json({ success: true, message: "Hotel Deleted Successfully" });
    }
    catch (err) {
        next(errorHandler(500, "Internal Server Error"));
    }
}