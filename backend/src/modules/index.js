import userRoutes from "./users/user.routes";
import chatRoutes from "./chat/chat.routes";
import { authJwt } from "../services/auth/auth.services";

export default app => {
  app.use("/api/v1/users", userRoutes);
  app.use("/api/v1/chat", chatRoutes);
  app.get("/hello", authJwt, (req, res) => {
    res.send("This is secret route");
  });
};
