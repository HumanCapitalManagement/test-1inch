const { tokenService } = require("../../services");

const getTokens = async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);
    const tokens = await tokenService.getTokens({ blockchainId: id });

    if (tokens) {
      res.status(200).json(tokens);
    } else {
      res.status(400).json({ result: "FAILED" });
    }
  } catch (e) {
    console.log(e);
    res.status(400).json({ result: "ERROR" });
  }
};

module.exports = getTokens;
