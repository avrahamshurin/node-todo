import express from 'express';
import morgan from 'morgan';
import todoRoutes from './src/routes/todoRoutes.js';
import usersRoutes from './src/routes/usersRoutes.js';
import { handleError } from './src/middleware/errorHandlingMiddleware.js';

const app = express();
const port = process.env.BACKEND_PORT || 3000;
console.log(`running on port ${port}`)

app.use(morgan('tiny'));
app.use('/todos', todoRoutes);
app.use('/users', usersRoutes);
app.use(handleError);

app.listen(port);