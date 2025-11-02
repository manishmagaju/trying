import fs from "fs";

const todosService = () => {
    const data = fs.readFileSync("./src/data/todos.json","utf8");
    const parsedData =JSON.parse(data);
    return parsedData

}

export default {todosService}