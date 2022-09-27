const baseUrl = require("./baseUrl");

const getLimitOrderUrl = (blockchainId, address) => {
  return `https://limit-orders.1inch.io/v2.0/${blockchainId}/limit-order/all?limit=100&statuses=%5B1%2C2%2C3%5D&makerAsset=${address}`;
};

module.exports = getLimitOrderUrl;
