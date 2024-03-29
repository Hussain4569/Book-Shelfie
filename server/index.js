import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import booksRoutes from "./routes/booksRoutes.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use("/api/books", booksRoutes);
app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI).
    then(() => {
        console.log("DB connected");
        app.listen(PORT, () => console.log("Server Running"));
    }).
    catch((err) => console.log(err));

