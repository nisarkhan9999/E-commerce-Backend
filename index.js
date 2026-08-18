import express, { Router } from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import router from "./product/route.js";
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/",router)

app.get("/", (req, res) => {
  res.send("Backend is running");
});
mongoose.connect(process.env.MONGO_URL)
.then(() => console.log("mongodb is connected"))
.catch((err) => console.log(err))

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
