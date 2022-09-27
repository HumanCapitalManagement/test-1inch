const { values } = require("lodash");
const getBlockchains = require("./getBlockchains");
const getTokensByBlockchainId = require("../tokens/getTokensByBlockchainId");
const addToken = require("../tokens/addToken");

async function sync() {
  try {
    const blockchains = await getBlockchains();
    for (const blockchain of blockchains) {
      const tokens = await getTokensByBlockchainId({ id: blockchain.id });
      const arrTokens = values(tokens);
      if (arrTokens?.length) {
        for (const token of arrTokens) {
          await addToken({
            blockchain_id: blockchain.id,
            address: token.address,
            logo_uri: token.logo_uri,
            symbol: token.symbol,
            name: token.name,
          });
        }
      }
    }
  } catch (e) {
    console.log(e);
    return false;
  }
}

module.exports = sync;
