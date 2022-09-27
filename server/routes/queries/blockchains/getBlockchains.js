const { blockchainService } = require("../../services");

const getBlockchains = async (req, res) => {
  const blockchains = await blockchainService.getBlockchains();

  if (blockchains) {
    res.status(200).json(blockchains);
  } else {
    res.status(400).json({ result: "FAILED" });
  }
};

module.exports = getBlockchains;
