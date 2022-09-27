const Router = require("express-promise-router");
const { blockchainQueries, tokenQueries } = require("./queries");

const router = new Router();

module.exports = () => {
  //blockchains
  router.get("/api/blockchains", blockchainQueries.getBlockchains);
  router.post("/api/blockchain", blockchainQueries.addBlockchain);

  //tokens
  router.get("/api/tokens", tokenQueries.getTokens);
  router.get("api/token", tokenQueries.getToken);
  return router;
};
