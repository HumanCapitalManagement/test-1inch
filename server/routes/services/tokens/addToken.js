const { pool } = require("../../../db");

async function addToken({ blockchain_id, address, logo_uri, symbol, name }) {
  try {
    const result = await pool.query(
      "INSERT INTO tokens (blockchain_id , address, logo_uri, symbol, id, name) VALUES ($1, $2, $3, $4, $5, $6)  ON CONFLICT (id) DO UPDATE SET logo_uri = $3 RETURNING *",
      [
        blockchain_id,
        address,
        logo_uri,
        symbol,
        `${blockchain_id}_${address}`,
        name,
      ]
    );

    return result.rows[0];
  } catch (e) {
    console.log(e);
    return false;
  }
}

module.exports = addToken;
