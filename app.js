const express = require('express')
const todoRoutes = require('./src/routes/todoRoutes')

const app = express();
const port = 3000;

app.use('/todos', todoRoutes);

app.listen(port);