const baseUrl = require("./baseUrl");

const getTokensUrl = (id) => {
  return `${baseUrl}${id}/tokens`;
};

module.exports = getTokensUrl;
