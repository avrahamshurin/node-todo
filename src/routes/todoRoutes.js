import express from 'express';
import todoService from '../services/todoService.js';
import { createTodoValidationSchema, editTodoValidationSchema } from '../validationSchemas/todoValidationSchemas.js';
import { checkAndValidateRequest } from '../middleware/validationMiddleware.js'

const router = express.Router();
router.use(express.json());

router.get('/', async (req, res) => {
    const todos = await todoService.getTodos();
    
    res.send(todos);
});

router.post('/', checkAndValidateRequest(createTodoValidationSchema), async (req, res) => {
    const id = await todoService.createTodo(req.body);

    res.status(201).json({id: id});
});

router.get('/:id', async (req, res) => {
    const todo = await todoService.findTodo(req.params.id);
    
    if (todo) {
        res.send(todo);
    } else {
        sendNotFound(res)
    };
});

router.delete('/:id', async (req, res) => {
    const found = await todoService.deleteTodo(req.params.id);
    if (found) {
        res.send();
    } else {
        sendNotFound(res)
    };
});

router.put('/:id', checkAndValidateRequest(editTodoValidationSchema), async (req, res) => {
    const found = await todoService.editTodo(req.params.id, req.body);

    if (found) {
        res.send();
    } else {
        sendNotFound(res)
    }
})

function sendNotFound(res) {
    res.status(404).json({error: 'Todo not found'});
}

export default router;