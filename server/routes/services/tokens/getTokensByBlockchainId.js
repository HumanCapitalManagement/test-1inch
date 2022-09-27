const fetch = require("node-fetch");

const { pool } = require("../../../db");
const apiRoutes = require("../../../apiRoutes");

async function getTokensByBlockchainId({ id }) {
  try {
    const res = await fetch(apiRoutes.getTokensUrl(id));
    const data = await res.json();
    return data?.tokens;
  } catch (e) {
    console.log(e);
    return [];
  }
}

module.exports = getTokensByBlockchainId;
