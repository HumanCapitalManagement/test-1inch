const { pool } = require("../../../db");

async function addBlockchain({ name, id }) {
  try {
    const result = await pool.query(
      "INSERT INTO blockchains (id , name) VALUES ($1, $2)  RETURNING *",
      [id, name]
    );
    return result.rows[0];
  } catch (e) {
    console.log(e);
    return false;
  }
}

module.exports = addBlockchain;
