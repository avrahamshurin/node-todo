import express from 'express';
import todoRoutes from './src/routes/todoRoutes.js';

const app = express();
const port = 3000;

app.use('/todos', todoRoutes);

app.listen(port);