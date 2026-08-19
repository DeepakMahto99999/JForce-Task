import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

const createToken = (userId) => {
    return jwt.sign(
        { userId },
        process.env.JWT_SECRET,
        { expiresIn: "3d" }
    );
};

const cookieOptions = {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 3 * 24 * 60 * 60 * 1000,
};

/**
 *  - user register controller
 *  - POST /api/auth/register
 */

export const userRegisterController = async (req, res) => {
    try {
        const { username, fullName, email, password } = req.body;

    
        const isEmailExists = await User.findOne({ email });

        if (isEmailExists) {
            return res.status(409).json({
                status: "failed",
                message: "Email is already registered.",
            });
        }


        const isUsernameExists = await User.findOne({ username });

        if (isUsernameExists) {
            return res.status(409).json({
                status: "failed",
                message: "Username is already taken.",
            });
        }

      
        const user = await User.create({
            username,
            fullName,
            email,
            password,
        });

        const token = createToken(user._id);

   
        res.cookie("token", token, cookieOptions);

        return res.status(201).json({
            status: "success",
            message: "User registered successfully.",
            user: {
                _id: user._id,
                username: user.username,
                fullName: user.fullName,
                email: user.email,
            },
        });

    } catch (error) {
    
        if (error.code === 11000) {
            return res.status(409).json({
                status: "failed",
                message: "Username or email already exists.",
            });
        }

        return res.status(500).json({
            status: "failed",
            message: error.message,
        });
    }
};


/**
 *  - user login controller
 *  - POST /api/auth/login
 */
export const userLoginController = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find user and explicitly include password
        const user = await User
            .findOne({ email })
            .select("+password");

        if (!user) {
            return res.status(401).json({
                status: "failed",
                message: "Email or password is invalid.",
            });
        }

        // Compare entered password with hashed password
        const isValidPassword = await user.comparePassword(password);

        if (!isValidPassword) {
            return res.status(401).json({
                status: "failed",
                message: "Email or password is invalid.",
            });
        }

        // Generate JWT
        const token = createToken(user._id);

        // Store JWT in HTTP-only cookie
        res.cookie("token", token, cookieOptions);

        return res.status(200).json({
            status: "success",
            message: "Login successful.",
            user: {
                _id: user._id,
                username: user.username,
                fullName: user.fullName,
                email: user.email,
            },
        });

    } catch (error) {
        return res.status(500).json({
            status: "failed",
            message: error.message,
        });
    }
};




/**
 *  - user logout controller
 *  - POST /api/auth/logout
 */
export const userLogoutController = (req, res) => {
    res.clearCookie("token");

    return res.status(200).json({
        success: true,
        message: "Logged out successfully."
    });
};