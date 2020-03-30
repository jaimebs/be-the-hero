const connection = require('../database/connection');
const { incidents } = require('../shared/tables');

module.exports = {
  async index(req, res) {
    const ong_id = req.headers.authorization;
    const data = await connection(incidents)
      .where('ong_id', ong_id)
      .select('*');

    return res.json(data);
  }
};
