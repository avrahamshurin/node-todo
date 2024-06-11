import express from 'express';
import morgan from 'morgan';
import todoRoutes from './src/routes/todoRoutes.js';
import { handleError } from './src/middleware/errorHandlingMiddleware.js';

const app = express();
const port = 3000;

app.use(morgan('tiny'));
app.use('/todos', todoRoutes);
app.use(handleError)

app.listen(port);