const express = require('express');
const todoService = require('../services/todoService');

const router = express.Router();
router.use(express.json());

router.get('/', (req, res) => {
    const todos = todoService.getTodos();
    
    res.send(todos);
});

router.post('/', (req, res) => {
    const id = todoService.createTodo(req.body);

    res.status(201).send(id);
});

router.get('/:id', (req, res) => {
    const todo = todoService.findTodo(req.params.id);

    if (todo) {
        res.send(todo);
    } else {
        sendNotFound(res)
    };
});

router.delete('/:id', (req, res) =>{
    const found = todoService.deleteTodo(req.params.id);

    if (found) {
        res.send();
    } else {
        sendNotFound(res)
    }
});

router.put('/:id', (req, res) =>{
    const found = todoService.editTodo(req.params.id, req.body);

    if (found) {
        res.send();
    } else {
        sendNotFound(res)
    }
})

function sendNotFound(res) {
    res.status(404).send('Todo not found');
}

module.exports = router;