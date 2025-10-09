import express from "express";
import productController from "../controller/productController.js"

const router = express.Router();

router.get("/",productController.getproduct);

router.post("/", (req, res) => {
  res.send(" products posted sucessfully");
});

router.put("/", (req, res) => {
  res.send(" products updated sucessfully");
});

export default router;
