const Router = require("express-promise-router");
const { blockchainQueries } = require("./queries");

const router = new Router();

module.exports = () => {
  //blockchains
  router.get("/api/blockchains", blockchainQueries.getBlockchains);
  router.post("/api/blockchain", blockchainQueries.addBlockchain);

  return router;
};
