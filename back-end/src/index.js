const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

/**
 * Tipos de parâmetros:
 *
 * Query Params: Parâmetros nomeados enviados na rota após "?". Req.query - (Filtros, Paginação);
 * Route Params: Parâmetros utilizados para identificar recursos (Rota/Recurso/:id);
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos.
 */

app.post('/', (req, res) => {
  res.json({ menssagem: 'Bateu no post!' });
});

app.listen(3333, () => {
  console.log('Server on the air!');
});
