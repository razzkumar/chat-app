import express from "express";
import http from "http";

import constants from "./config/constants";
import "./config/database";
import middlewareConfig from "./config/middleware";
import SocketIO from "./socket";
import userRoutes from "./modules";

const app = express();

const server = http.createServer(app);

middlewareConfig(app);

SocketIO(server);

app.get("/", (req, res) => {
  res.send("Hell bro");
});

userRoutes(app);

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
