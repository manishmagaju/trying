import todosService from "../services/todosService.js";

const todosController = (req,res)=>{
    const todos =todosService.todosService()
    res.status(200).json(todos)
}

export default{todosController};