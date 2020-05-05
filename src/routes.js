const express = require('express');

const routes = express.Router();

const UserController = require('./app/controllers/UserController');

routes.get('/', (req, res) =>{
  res.send('<h1>Rota criada a partir do Routes</h1>');
});

routes.get('/list', UserController.list);
routes.post('/register', UserController.create);



module.exports = routes;