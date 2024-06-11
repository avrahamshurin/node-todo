import express from 'express';
import { getTodos, createTodo, findTodo, deleteTodo, editTodo } from '../services/todoService.js';
import { createTodoValidationSchema, editTodoValidationSchema } from '../validationSchemas/todoValidationSchemas.js';
import { checkAndValidateRequest } from '../middleware/validationMiddleware.js'

const router = express.Router();
router.use(express.json());

router.get('/', (req, res) => {
    const todos = getTodos();

    res.send(todos);
});

router.post('/', checkAndValidateRequest(createTodoValidationSchema), (req, res) => {
    const id = createTodo(req.body);

    res.status(201).send(id);
});

router.get('/:id', (req, res) => {
    const todo = findTodo(req.params.id);

    if (todo) {
        res.send(todo);
    } else {
        sendNotFound(res)
    };
});

router.delete('/:id', (req, res) => {
    const found = deleteTodo(req.params.id);

    if (found) {
        res.send();
    } else {
        sendNotFound(res)
    }
});

router.put('/:id', checkAndValidateRequest(editTodoValidationSchema), (req, res) => {
    const found = editTodo(req.params.id, req.body);

    if (found) {
        res.send();
    } else {
        sendNotFound(res)
    }
})

function sendNotFound(res) {
    res.status(404).send('Todo not found');
}

export default router;