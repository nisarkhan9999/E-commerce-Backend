import express from "express"
const router = express.Router()
import schema from "../models/schema.js"

router.get("/products", async(req,res)=>{
   try {
     const product = await schema.find()
    res.json(product)
   } catch (error) {
    res.status(500).json({message: error.message})

   }
})
router.get("/products/:id", async (req, res) => {
  try {
    const product = await schema.findById(req.params.id)  
    if (!product) {
      return res.status(404).json({message: "Product not found"})
    }
    res.json(product)
  } catch (error) {
    res.status(500).json({message: error.message})
  }
})

// router.post('/product',async(req,res)=>{
//     const newProduct = await schema.create(req.body)
//     res.json(newProduct)
// })


export default router