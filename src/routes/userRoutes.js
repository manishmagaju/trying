import express from "express"
import userController from "../controller/userController.js";

const router = express.Router();

router.get("/",userController.productController);
router.get("/:user",userController.getUserById);


export default router;