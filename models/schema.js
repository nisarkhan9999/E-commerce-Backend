import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
 name:{
    type:String
 },
  image:{
    type:String
 },
  price:{
    type:Number
 },
  rating:{
    type:Number
 },
  description:{
    type:String
 }
});

export default mongoose.model("Product", productSchema);