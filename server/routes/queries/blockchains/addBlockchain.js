const { each } = require("lodash");

const { blockchainService, tokenService } = require("../../services");

const addBlockChain = async (req, res) => {
  try {
    const { name, id } = req.body;
    const isExist = await blockchainService.healthCheck({ id });
    if (isExist) {
      const blockchain = await blockchainService.addBlockchain({ name, id });
      if (blockchain) {
        const tokens = tokenService.getTokensByBlockchainId({ id });
        if (tokens?.length) {
          each(tokens, (token) => {
            tokenService.addToken({
              blockchain_id: id,
              address: token.address,
              logo_uri: token.logo_uri,
              symbol: token.symbol,
              name: token.name,
            });
          });
        }
        res.status(200).json(blockchain);
      } else {
        res.status(400).json({ result: "server error" });
      }
    } else {
      res.status(400).json({ result: "Id not exist" });
    }
  } catch (e) {
    res.status(400).json({ result: "something went wrong" });
  }
};

module.exports = addBlockChain;
