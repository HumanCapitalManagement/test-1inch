const { tokenService } = require("../../services");
const getScanLink = require("../../../utils/linkMapping");

const getToken = async (req, res) => {
  try {
    const id = req.params.id;
    const token = await tokenService.getToken({ tokenId: id });
    if (token.length && token[0]) {
      const { blockchain_id, address } = token[0];
      const orders = await tokenService.getLimitOrders({
        blockchainId: blockchain_id,
        address,
      });
      res.status(200).json({
        info: token[0],
        orders,
        link: getScanLink(blockchain_id, address),
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
