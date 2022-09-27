const { pool } = require("../../../db");

async function getToken({ tokenId }) {
  try {
    const result = await pool.query("SELECT * FROM tokens WHERE id = $1", [
      tokenId,
    ]);

    return result.rows;
  } catch (e) {
    console.log(e);
    return false;
  }
}

module.exports = getToken;
