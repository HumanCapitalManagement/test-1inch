const express = require("express");
const path = require("path");
const http = require("http");
const cors = require("cors");
const routes = require("./routes");

const PORT = process.env.PORT || 8081;

const app = express();

const server = http.createServer(app);

app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.static(path.resolve(__dirname, "../client/dist")));
app.use(routes());
server.listen(PORT, () => {
  console.log(`Server listening on ${server.address().port}`);
});

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/dist", "index.html"));
});
