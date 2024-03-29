import jwt from "jsonwebtoken";

import dotenv from 'dotenv';
dotenv.config();

const authenticateToken = (req, res, next) => {
    console.log(req.headers);
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    console.log(token);

    if (token === null) return res.status(401).send("No token");

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) return res.status(403).send("Invalid token");

        req.user = user;
        next();
    });
}

export default authenticateToken;