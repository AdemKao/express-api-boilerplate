import express from "express";
import { config } from "./config";
import { v1Route, v2Route } from "./routes";
const app = express();

app.get("/", async (req, res) => {
  res.send("ADAPT api ");
});

app.use("/v1", v1Route);
app.use("/v2", v2Route);
let server;

server = app.listen(config.port, () => {
  //   logger.info(`Listening to port ${config.port}`);
  console.log(`Listening to port ${config.port}`);
});
