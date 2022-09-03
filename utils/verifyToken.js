import jwt from "jsonwebtoken";
import { errorHandler } from "./error.js";

// function to verify if token is valid or not
export const verifyToken = (req, res, next) => {
    try {
        let token = req.cookies.access_token;
        if (!token) return (next(errorHandler(401, "You are not authenticated")));

        jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
            if (err) return (next(errorHandler(403, "Token is not valid")))
            req.user = user;
            next();
        });
    }
    catch (err) {
        next(errorHandler(500, err));
    }
}

// Function to verify if user is eligible to make some changes in it's own account

export const verifyUser = (req, res, next) => {
    try {
        verifyToken(req, res, () => {
            if (req.user.id === req.params.id || user.isAdmin) {
                next()
            } else {
                return next(errorHandler(403, "You are not authenticated"))
            }
        });

    }
    catch (err) {
        next(errorHandler(500, err));
    }
}

// Function to verify admin
export const verifyAdmin = (req, res, next) => {
    try {
        verifyToken(req, res, () => {
            if (req.user.isAdmin) {
                next()
            } else {
                return next(errorHandler(403, "You are not authenticated"))
            }
        });

    }
    catch (err) {
        next(errorHandler(500, err));
    }
}