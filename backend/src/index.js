import express from "express";
import http from "http";

import constants from "./config/constants";
import "./config/database";
import middlewareConfig from "./config/middleware";
import SocketIO from "./socket";
import userRoutes from "./modules";
import path from "path";
const app = express();

const server = http.createServer(app);

middlewareConfig(app);

SocketIO(server);

if (process.env.NODE_ENV === "development") {
  app.get("/", (req, res) => {
    res.send("Hell bro");
  });
}
userRoutes(app);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.resolve(__dirname, "public")));
  app.get("*", (req, res) => {
    const dir = path.resolve(__dirname, "public", "index.html");
    res.sendFile(dir);
  });
}

server.listen(constants.PORT, err => {
  if (err) {
    throw err;
  } else {
    console.log(`
            Server is running on port: ${constants.PORT}

            ----Running on ${process.env.NODE_ENV}
            
            ----Make something great!`);
  }
});
