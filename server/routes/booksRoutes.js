import express from "express";

const router = express.Router();

//get all books
router.get("/", (req, res) => {
    res.send("Books");
});

//get a book
router.get("/:id", (req, res) => {
    res.send("Book");
});

//create a book
router.post("/", (req, res) => {
    res.send("Book created");
});

//update a book
router.put("/:id", (req, res) => {
    res.send("Book updated");
});

//delete a book
router.delete("/:id", (req, res) => {
    res.send("Book deleted");
});

export default router;