import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";

import router from "./product/route.js";
import authRouter from "./product/auth.js";
import orderRouter from "./product/orderRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// =========================
// PRODUCT ROUTES
// =========================
app.use("/", router);

// =========================
// AUTH ROUTES
// =========================
app.use("/auth", authRouter);

// =========================
// ORDER ROUTES
// =========================
app.use("/", orderRouter);

// =========================
// HOME
// =========================
app.get("/", (req, res) => {
  res.send("Backend is running");
});

// =========================
// DATABASE
// =========================
const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("MongoDB is connected");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("MongoDB connection error:", err);
  });