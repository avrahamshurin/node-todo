import { v4 as uuidv4 } from 'uuid';

const todos = [
    {
        id: uuidv4(),
        title: 'todo1',
        content: 'some stuff'
    },
    {
        id: uuidv4(),
        title: 'todo2',
        content: 'some stuff'
    }
];

function getTodos() {
    return todos;
}

function createTodo(todoBody) {
    const todo = {
        id: uuidv4(),   
        title: todoBody.title,
        content: todoBody.content,
    };

    todos.push(todo);

    return todo.id;
}

function findTodo(id) {
    return todos.find((item) => {
        return item.id === id;
    });
}

function deleteTodo(id) {
    const idx = todos.findIndex((item) => item.id === id);
    
    if (idx < 0){
        return false;
    } else {
        todos.splice(idx, 1);
        return true;
    }
}

function editTodo(id, todoBody) {
    const idx = todos.findIndex((item) => item.id === id);
    
    if (idx < 0){
        return false;
    } else {
        todos[idx].title = todoBody.title;
        todos[idx].content = todoBody.content;
    
        return true;
    }
}

export {
    getTodos,
    createTodo,
    findTodo,
    deleteTodo,
    editTodo
};