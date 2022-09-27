const { tokenService } = require("../../services");

const getToken = async (req, res) => {
  try {
    const { tokenId } = req.body;
    const token = await tokenService.getToken({ tokenId });

    if (token.length && token[0]) {
      const { blockchain_id, address } = token[0];
      const orders = await tokenService.getLimitOrders({
        blockchainId: blockchain_id,
        address,
      });
      res.status(200).json({
        info: token[0],
        orders,
      });
    } else {
      res.status(400).json({ result: "TOKEN NOT EXIST" });
    }
  } catch (e) {
    console.log(e);
    res.status(400).json({ result: "ERROR" });
  }
};

module.exports = getToken;
