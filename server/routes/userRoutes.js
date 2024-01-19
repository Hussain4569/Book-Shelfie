import express from 'express';
import User from '../models/userModel.js';
import bcrypt from 'bcrypt'; 
import jwt from 'jsonwebtoken';

import dotenv from 'dotenv';
dotenv.config();

const router = express.Router();

router.post("/signup", async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    //checks for missing email and password
    if (!email && !password) return res.status(400).send("Missing email and password");
    if (!email) return res.status(400).send("Missing email");
    if (!password) return res.status(400).send("Missing password");

    //check if user already exists
    if (await User.findOne({email})) return res.status(400).send("User already exists");

    //hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
        email,
        password: hashedPassword
    });

    try {
        await newUser.save();

        // Create and assign a token with user email info
        //will use user email to filter books created by user
        jwt.sign({ email }, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '1hr'}, (err, token) => {
            if (err) res.status(500).send(err);

            return res.status(201).json({accessToken: token});
        });

    } catch (error) {
        return res.status(400).send(error);
    }
});

router.post("/login", async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    //checks for missing email and password
    if (!email && !password) return res.status(400).send("Missing email and password");
    if (!email) return res.status(400).send("Missing email");
    if (!password) return res.status(400).send("Missing password");

    const foundUser = await User.findOne({ email });

    if (foundUser === null) return res.status(400).send("Cannot find user");

    //comparing password hashes using bcrypt and sending token if successful
    try {
        if (await bcrypt.compare(password, foundUser.password)) {
            
            jwt.sign({email: email}, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '1hr'}, (err, token) => {
                if (err) res.status(500).send(err);

                return res.status(200).json({accessToken: token});
            });

        } else {
            return res.status(401).send("Password not correct");
        }
    } catch (error) {
        return res.status(500).send(error);
    }
});

export default router;