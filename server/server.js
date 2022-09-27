const express = require("express");
const path = require("path");
const http = require("http");
const cors = require("cors");

const PORT = process.env.PORT || 8081;

const app = express();

const server = http.createServer(app);

app.use(cors());
app.use(express.static(path.resolve(__dirname, "../client/dist")));

server.listen(PORT, () => {
  console.log(`Server listening on ${server.address().port}`);
});

app.get("/api/test", (req, res) => {
  res.send({ message: "test route" });
});
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/dist", "index.html"));
});
