const Router = require("express-promise-router");
const { blockchainQueries } = require("./queries");

const router = new Router();

module.exports = () => {
  //blockchains
  router.get("/api", blockchainQueries.getBlockchains);
  router.post("/api/add-blockchain", blockchainQueries.addBlockchain);
  return router;
};
