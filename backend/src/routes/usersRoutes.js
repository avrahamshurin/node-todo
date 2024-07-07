import express from 'express';
import usersService from '../services/usersService.js';
import { signupValidationSchema, loginValidationSchema } from '../validationSchemas/usersValidationSchemas.js';
import { checkAndValidateRequest } from '../middleware/validationMiddleware.js';

const router = express.Router();
router.use(express.json());

router.post('/signup', checkAndValidateRequest(signupValidationSchema), async (req, res, next) => {
    try {
        const {first_name, last_name, email, password} = req.body;
        const {id, token} = await usersService.signUp(first_name, last_name, email, password);
        res.status(201).json({id: id, token: token});
    } catch (error) {
        next(error)
    }
})

router.post('/login', checkAndValidateRequest(loginValidationSchema), async (req, res, next) => {
    try {
        const {email, password} = req.body;
        const {id, token} = await usersService.login(email, password);
        res.status(201).json({id: id, token: token});
    } catch (error) {
        next(error)
    }
})

export default router;