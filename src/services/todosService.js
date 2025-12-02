import fs from "fs";

const data = fs.readFileSync("./src/data/todos.json", "utf8");
const parsedData = JSON.parse(data);

const todosService = () => {
    const todosData = parsedData
    return todosData

}

const getTodosIndividually = (todoss) => {
    const findedTodos = parsedData.find((todos) => todos.id == todoss);
    return findedTodos

 
}

export default { todosService, getTodosIndividually }