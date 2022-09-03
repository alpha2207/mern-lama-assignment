import User from '../models/userModel.js';

export const getUser = async (req, res) => {
    try {
        let user = await User.findById(req.params.id);
        res.status(200).json({ success: true, user });
    }
    catch (err) {
        next(500,err);
    }
}

export const getAllUsers = async (req, res) => {
    try {
        let user = await User.find();
        res.status(200).json({ success: true, user });
    }
    catch (err) {
        next(500,err);
    }
}

export const updateUser =async (req, res,next) => {

    try {
        let user = await User.findByIdAndUpdate(req.params.id,req.body, { new: true });
        res.status(200).json({ success: true, user });
    }
    catch (err) {
        next(500,err);
    }
}

export const deleteUser =  async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
                res.status(200).json({ success: true, message: "Hotel Deleted Successfully" });
    }
    catch (err) {
        next(500,err);
    }
}