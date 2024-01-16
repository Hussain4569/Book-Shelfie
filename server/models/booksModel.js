import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        default: "Unknown",
    },
    genre: {
        type: String,
        default: "Other",
    },
    year: {
        type: Number,
        default: 0,
    },
    rating: {
        type: Number,
        default: 0,
    },
    review: {
        type: String,
        default: "No review",
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
});

const Book = mongoose.model("Book", bookSchema);

export default Book;