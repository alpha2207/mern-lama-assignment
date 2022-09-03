import User from '../models/userModel.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
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
        let user = await User.findOne({ username: req.body.username });
        if (!user) return next(errorHandler(404, "User not found."));

        let isPasswordCorrect = bcrypt.compareSync(req.body.password, user.password);
        if (!isPasswordCorrect) return (next(errorHandler(400, "Invalid Credentials")));

        let token = jwt.sign({ id: user._id, isAdmin: user.isAdmin },process.env.JWT_SECRET,{
            expiresIn:'3d'
        });

        const { password, isAdmin, ...others } = user._doc;
        res.cookie("access_token",token,{
            httpOnly:true
        }).status(200).json({ ...others });
    }
    catch (err) {
        next(errorHandler(500, "Internal Server Error"));
    }
}