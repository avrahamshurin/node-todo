import express from 'express'
import { v4 as uuidv4 } from 'uuid';

const app = express();
const port = 3000;

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

app.use(express.json());

app.get('/todos', (req, res) => {
    res.send(todos);
});

app.post('/todos', (req, res) => {
    const todo = {
        id: uuidv4(),   
        title: req.body.title,
        content: req.body.content,
    };

    todos.push(todo);

    res.status(201).send(todo.id);
});

app.get('/todos/:id', (req, res) => {
    const todo = todos.find((item) => {
        return item.id === req.params.id;
    });

    if (!todo) {
        res.status(404).send('Todo not found');
    } else {
        res.send(todo);
    };
});

app.delete('/todos/:id', (req, res) =>{
    const idx = todos.findIndex((item) => item.id === req.params.id);
    if (idx < 0){
        res.status(404).send('Todo not found');
    } else {
        todos.splice(idx, 1);
        res.send();
    }
});

app.put('/todos/:id', (req, res) =>{
    const idx = todos.findIndex((item) => item.id === req.params.id);
    if (idx < 0){
        res.status(404).send('Todo not found');
    } else {
        todos[idx].title = req.body.title;
        todos[idx].content = req.body.content;
    
        res.send();
    }
})

app.listen(port);