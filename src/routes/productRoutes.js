import express from "express";
import fs from "fs";

const router = express.Router();

router.get("/", (req, res) => {
 const rawData = fs.readFileSync("./src/data/products.json","utf8");
 const product = JSON.parse(rawData);
 const filteredProducts = product.filter((product)=>product.price > 800);
 res.status(200).json(product);
 
});

router.post("/", (req, res) => {
  res.send(" products posted sucessfully");
});

router.put("/", (req, res) => {
  res.send(" products updated sucessfully");
});

export default router;
