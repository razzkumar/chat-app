import { Router } from "express";
import * as chatController from "./chat.controllers";
import { authJwt } from "../../services/auth/auth.services";

const routes = new Router();

routes.post("/create-chatroom", authJwt, chatController.createChatroom);
routes.get("/chatrooms", authJwt, chatController.getChatrooms);
routes.get("/members/:id", authJwt, chatController.getChatroomsMembers);
routes.get("/messages/:id", authJwt, chatController.getChatroomsMessage);

export default routes;
