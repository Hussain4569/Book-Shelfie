import express from 'express';

const router = express.Router();

router.post("/signup", (req, res) => {
    res.send("signup");
});

router.post("/login", (req, res) => {
    res.send("login");
});

export default router;