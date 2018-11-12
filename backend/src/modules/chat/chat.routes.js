import { Router } from "express";
import * as chatController from "./chat.controllers";
import { authJwt } from "../../services/auth/auth.services";

const routes = new Router();

routes.post("/create-chatroom", authJwt, chatController.createChatroom);

export default routes;
