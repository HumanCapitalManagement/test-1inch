const fetch = require("node-fetch");

const { pool } = require("../../../db");
const apiRoutes = require("../../../apiRoutes");

async function getLimitOrders({ blockchainId, address }) {
  try {
    const res = await fetch(apiRoutes.getLimitOrderUrl(blockchainId, address));
    const data = await res.json();

    return data;
  } catch (e) {
    console.log(e);
    return false;
  }
}

module.exports = getLimitOrders;
