import express from "express";
import Order from "../models/Order.js";

const router = express.Router();

// =========================
// CREATE ORDER
// =========================
router.post("/orders", async (req, res) => {
  try {
    const {
      customerName,
      customerEmail,
      items,
      total,
    } = req.body;

    if (!customerName || !customerEmail || !items || !items.length || !total) {
      return res.status(400).json({
        message: "All order details are required",
      });
    }

    const order = await Order.create({
      customerName,
      customerEmail,
      items,
      total,
      status: "Pending",
    });

    res.status(201).json({
      message: "Order created successfully",
      order,
    });
  } catch (error) {
    console.error("Create order error:", error);

    res.status(500).json({
      message: error.message,
    });
  }
});

// =========================
// GET ALL ORDERS
// =========================
router.get("/orders", async (req, res) => {
  try {
    const orders = await Order.find().sort({
      date: -1,
    });

    res.status(200).json(orders);
  } catch (error) {
    console.error("Get orders error:", error);

    res.status(500).json({
      message: error.message,
    });
  }
});

// =========================
// GET SINGLE ORDER
// =========================
router.get("/orders/:id", async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);

    if (!order) {
      return res.status(404).json({
        message: "Order not found",
      });
    }

    res.status(200).json(order);
  } catch (error) {
    console.error("Get single order error:", error);

    res.status(500).json({
      message: error.message,
    });
  }
});

// =========================
// UPDATE ORDER STATUS
// =========================
router.put("/orders/:id", async (req, res) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id,
      {
        status: req.body.status,
      },
      {
        new: true,
      }
    );

    if (!updatedOrder) {
      return res.status(404).json({
        message: "Order not found",
      });
    }

    res.status(200).json(updatedOrder);
  } catch (error) {
    console.error("Update order error:", error);

    res.status(500).json({
      message: error.message,
    });
  }
});

// =========================
// DELETE ORDER
// =========================
router.delete("/orders/:id", async (req, res) => {
  try {
    const deletedOrder = await Order.findByIdAndDelete(
      req.params.id
    );

    if (!deletedOrder) {
      return res.status(404).json({
        message: "Order not found",
      });
    }

    res.status(200).json({
      message: "Order deleted successfully",
    });
  } catch (error) {
    console.error("Delete order error:", error);

    res.status(500).json({
      message: error.message,
    });
  }
});

export default router;