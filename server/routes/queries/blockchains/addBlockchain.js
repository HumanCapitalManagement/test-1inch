const { blockchainService } = require("../../services");

const addBlockChain = async (req, res) => {
  try {
    const { name, id } = req.body;
    const blockchain = await blockchainService.addBlockchain({ name, id });

    if (blockchain) {
      res.status(200).json(blockchain);
    } else {
      res.status(400).json({ result: "FAILED" });
    }
  } catch (e) {
    res.status(400).json({ result: "FAILED" });
  }
};

module.exports = addBlockChain;
