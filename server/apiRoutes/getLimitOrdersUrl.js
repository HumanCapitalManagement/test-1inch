const baseUrl = require("./baseUrl");

const getLimitOrderUrl = (blockchainId, address) => {
  return `https://limit-orders.1inch.io/v2.0/${blockchainId}/limit-order/all?limit=100&makerAsset=${address}`;
};

module.exports = getLimitOrderUrl;
