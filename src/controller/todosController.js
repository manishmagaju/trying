import todosService from "../services/todosService.js";

const todosController = (req, res) => {
    const todos = todosService.todosService()
    res.status(200).json(todos)
}


const individualTodos = (req, res) => {
    const todo = req.params.todoss;
    res.send(`hello this is  individual todos${todo}`)
}

export default { todosController, individualTodos };