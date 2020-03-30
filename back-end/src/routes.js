const routes = require('express').Router();

/**
 * Tipos de parâmetros:
 *
 * Query Params: Parâmetros nomeados enviados na rota após "?". Req.query - (Filtros, Paginação);
 * Route Params: Parâmetros utilizados para identificar recursos (Rota/Recurso/:id);
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos.
 */

routes.post('/', (req, res) => {
  res.json({ menssagem: 'Bateu no post! Routes' });
});

module.exports = routes;
