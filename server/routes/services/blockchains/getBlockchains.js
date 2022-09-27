const { pool } = require("../../../db");

async function getBlockchains() {
  try {
    const result = await pool.query("SELECT * FROM blockchains");
    return result.rows;
  } catch (e) {
    console.log(e);
    return false;
  }
}

module.exports = getBlockchains;
