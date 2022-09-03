import User from '../models/userModel.js';
import bcrypt from 'bcryptjs';
import { errorHandler } from '../utils/error.js';

// Register user Controller
export const register = async (req, res, next) => {
    let { username, email, password } = req.body;
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    let user = new User({
        username,
        email,
        password: hash
    });
    try {
        let savedUser = await user.save();
        res.status(201).json({ message: "User Created", savedUser });
    }
    catch (err) {
        next(errorHandler(500, err));
    }
}

// Login Controller

export const login = async (req, res, next) => {
    try {
        let user = await User.findOne({username:req.body.username});
        if (!user) return next(errorHandler(404, "User not found."));
        
        let isPasswordCorrect = bcrypt.compareSync(req.body.password, user.password);
        if (!isPasswordCorrect) return (next(errorHandler(400, "Invalid Credentials")));

        const { password, isAdmin, ...others } = user._doc;
        res.status(200).json({ ...others });
    }
    catch (err) {
        next(errorHandler(500, "Internal Server Error"));
    }
}