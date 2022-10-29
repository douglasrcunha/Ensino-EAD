const express = require('express');
const CursoControle = require('./controllers/CursoControle');
const routes = express.Router();

const LoginController = require('./controllers/LoginController');

// Rota Login
routes.post('/login', LoginController.insLogin);
routes.get('/login', LoginController.getLogin);
routes.delete('/login/:id', LoginController.delLogin);

// Rota Cursos
routes.post('/cursos', CursoControle.insCursos);
routes.get('/cursos', CursoControle.getCursos);
routes.delete('/cursos/:id', CursoControle.delCursos);

module.exports = routes;