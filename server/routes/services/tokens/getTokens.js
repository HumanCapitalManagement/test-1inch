const { pool } = require("../../../db");

async function getTokens({ blockchainId }) {
  try {
    const result = await pool.query(
      "SELECT * FROM tokens WHERE blockchain_id = $1",
      [blockchainId]
    );

    return result.rows;
  } catch (e) {
    console.log(e);
    return false;
  }
}

module.exports = getTokens;
