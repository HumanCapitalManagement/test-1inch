const baseUrl = require("./baseUrl");

const blockChainHealthCheck = (id) => {
  return `${baseUrl}${id}/healthcheck`;
};

module.exports = blockChainHealthCheck;
