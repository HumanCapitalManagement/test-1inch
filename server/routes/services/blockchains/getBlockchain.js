const { pool } = require("../../../db");

async function getBlockchain(id) {
  try {
    const result = await pool.query("SELECT * FROM blockchains WHERE id = $1", [
      id,
    ]);
    if (result.rows.length) {
      return result.rows[0];
    } else {
      return false;
    }
  } catch (e) {
    console.log(e);
    return false;
  }
}

module.exports = getBlockchain;
