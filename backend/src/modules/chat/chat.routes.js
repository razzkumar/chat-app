import { Router } from "express";
import * as chatController from "./chat.controllers";
import { authJwt } from "../../services/auth/auth.services";

const routes = new Router();

routes.get("/members", authJwt, chatController.getUsers);
routes.get("/messages", authJwt, chatController.getMessage);

export default routes;
