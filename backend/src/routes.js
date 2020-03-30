const routes = require('express').Router();
const sessionController = require('./controllers/sessionController');
const ongController = require('./controllers/ongController');
const incidentController = require('./controllers/incidentController');
const profileController = require('./controllers/profileController');

/**
 * Tipos de parâmetros:
 *
 * Query Params: Parâmetros nomeados enviados na rota após "?". Req.query - (Filtros, Paginação);
 * Route Params: Parâmetros utilizados para identificar recursos (Rota/Recurso/:id);
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos.
 */
routes.post('/sessions', sessionController.create);

routes.get('/ongs', ongController.index);
routes.post('/ongs', ongController.create);

routes.get('/incidents', incidentController.index);
routes.post('/incidents', incidentController.create);
routes.delete('/incidents/:id', incidentController.delete);

routes.get('/profile', profileController.index);

module.exports = routes;
