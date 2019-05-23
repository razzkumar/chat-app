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


userRoutes(app);

app.use('*', express.static('public'))

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
