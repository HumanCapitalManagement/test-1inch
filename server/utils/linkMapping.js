const { find } = require("lodash");

const linkMapping = [
  {
    id: 1,
    link: "https://etherscan.io/address/",
  },
  {
    id: 56,
    link: "https://bscscan.com/address/",
  },
  {
    id: 137,
    link: "https://polygonscan.com/address/",
  },
  {
    id: 10,
    link: "https://optimistic.etherscan.io/address/",
  },
  {
    id: 42161,
    link: "https://arbiscan.io/address/",
  },
  {
    id: 100,
    link: "https://gnosisscan.io/address/",
  },
  {
    id: 43114,
    link: "https://avascan.info/blockchain/all/address/",
  },
  {
    id: 250,
    link: "https://ftmscan.com/address/",
  },
  {
    id: 8217,
    link: "https://explorer.bitquery.io/klaytn/address/",
  },
  {
    id: 1313161554,
    link: "https://aurorascan.dev/address/",
  },
];

const getLink = (blockchainId, address) => {
  const linkObject = find(linkMapping, { id: parseInt(blockchainId) });
  if (linkObject) {
    return `${linkObject.link}/${address}`;
  }
  return "";
};

module.exports = getLink;
