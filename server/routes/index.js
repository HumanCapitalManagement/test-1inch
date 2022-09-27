const Router = require("express-promise-router");
const { blockchainQueries, tokenQueries } = require("./queries");

const router = new Router();

module.exports = () => {
  //blockchains
  router.get("/api/blockchains", blockchainQueries.getBlockchains);
  router.post("/api/blockchain", blockchainQueries.addBlockchain);
  router.get("/api/blockchain/:id/tokens", tokenQueries.getTokens);
  //tokens

  router.get("/api/token/:id", tokenQueries.getToken);
  return router;
};
