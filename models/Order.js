import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  customerName: {
    type: String,
    required: true,
  },

  customerEmail: {
    type: String,
    required: true,
  },

  items: [
    {
      name: String,
      image: String,
      price: Number,
      qty: Number,
      size: String,
      color: String,
    },
  ],

  total: {
    type: Number,
    required: true,
  },

  status: {
    type: String,
    default: "Pending",
  },

  date: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Order", orderSchema);