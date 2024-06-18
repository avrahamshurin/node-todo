import dbService from '../services/dbService.js';

const todoService = {};

todoService.getTodos = async () => {
    const todos = await dbService.query("SELECT * FROM todo");
    
    return todos;
}

todoService.createTodo = async(todoBody) => {
    const result = await dbService.query("INSERT INTO todo (title, content) Values ($1, $2) RETURNING t_id",
     [todoBody.title, todoBody.content]);
    const { t_id } = result[0];

    return t_id;
}

todoService.findTodo = async (id) => {
    const todo = await dbService.query("SELECT * FROM todo WHERE t_id = $1", [id]);

    return todo[0];
}

todoService.deleteTodo = async (id) => {
    const result = await dbService.query("DELETE FROM todo WHERE t_id = $1 RETURNING t_id", [id]);
    
    return result.length > 0;
}

todoService.editTodo = async (id, todoBody) => {
    const result = await dbService.query("UPDATE todo SET title = $1, content = $2 WHERE t_id = $3 RETURNING t_id",
     [todoBody.title, todoBody.content, id]);

     return result.length > 0;
}

export default todoService;