const fetch = require("node-fetch");
const apiRoutes = require("../../../apiRoutes");

async function healthCheck({ id }) {
  const res = await fetch(apiRoutes.getBlockchainHealthCheckUrl(id));
  const data = await res.json();
  if (data?.status !== "OK") {
    return false;
  } else {
    return true;
  }
}

module.exports = healthCheck;
