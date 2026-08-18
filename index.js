import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import router from "./product/route.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/", router);

app.get("/", (req, res) => {
  res.send("Backend is running");
});

// ========== YAHAN CHANGE KARO ==========
const PORT = process.env.PORT || 5000;  // Vercel apna PORT deta hai

mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    console.log("MongoDB is connected");
    app.listen(PROcess.env.PORT || 5000, () => {   // Vercel ke liye PORT use karo
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => console.log(err));

// ========== CHANGE KHATAM ==========