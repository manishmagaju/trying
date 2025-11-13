import express from "express";
import todosController from "../controller/todosController.js";

const router = express.Router();

router.get("/",todosController.todosController)
router.get("/:todoss",todosController.individualTodos)



export default router;