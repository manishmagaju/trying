import express from "express";
import productController from "../controller/productController.js"

const router = express.Router();

router.get("/",productController.getproduct);
router.post("/",productController.postRequest);
router.put("/",productController.putRequest);
router.get("/one",productController.getProductById);
router.delete("/",productController.deleteProduct)


export default router;
