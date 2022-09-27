const getBlockchains = require("./getBlockchains");
const addBlockchain = require("./addBlockchain");
const healthCheck = require("./healthCheck");
const syncBlockchain = require("./sync");

module.exports = {
  getBlockchains,
  addBlockchain,
  healthCheck,
  syncBlockchain,
};
