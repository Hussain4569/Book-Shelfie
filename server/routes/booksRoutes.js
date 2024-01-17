import express from "express";
import authenticateToken from "../middleware/authenticateToken.js";

const router = express.Router();

//get all books
router.get("/", authenticateToken, (req, res) => {
    res.send("Books");
});

//get a book
router.get("/:id", authenticateToken, (req, res) => {
    console.log(req.user.email);
    res.send("Book");
});

//create a book
router.post("/", authenticateToken, (req, res) => {
    console.log(req.user.email);
    res.send("Book created");
});

//update a book
router.put("/:id", authenticateToken, (req, res) => {
    console.log(req.user.email);
    res.send("Book updated");
});

//delete a book
router.delete("/:id", authenticateToken, (req, res) => {
    console.log(req.user.email);
    res.send("Book deleted");
});

export default router;