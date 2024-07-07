import dbService from "../services/dbService.js";

const todoService = {};

todoService.getTodos = async (userId) => {
  const todos = await dbService.query("SELECT * FROM todos WHERE user_id=$1", [
    userId,
  ]);
  return todos;
};

todoService.createTodo = async (userId, todoBody) => {
  const result = await dbService.query(
    "INSERT INTO todos (title, content, user_id) VALUES ($1, $2, $3) RETURNING id",
    [todoBody.title, todoBody.content, userId]
  );
  const { id } = result[0];
  return id;
};

todoService.findTodo = async (id) => {
  const todo = await dbService.query("SELECT * FROM todos WHERE id = $1", [id]);

  return todo[0];
};

todoService.deleteTodo = async (id) => {
  const result = await dbService.query(
    "DELETE FROM todos WHERE id = $1 RETURNING id",
    [id]
  );

  return result.length > 0;
};

todoService.editTodo = async (id, todoBody) => {
  const result = await dbService.query(
    "UPDATE todos SET title = $1, content = $2 WHERE id = $3 RETURNING id",
    [todoBody.title, todoBody.content, id]
  );

  return result.length > 0;
};

todoService.setTodoStatus = async (id, isCompleted) => {
  const result = await dbService.query(
    "UPDATE todos SET is_completed = $1 where id = $2 RETURNING id",
    [isCompleted, id]
  );

  return result.length > 0;
};

export default todoService;
