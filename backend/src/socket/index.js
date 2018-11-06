import socketIO from "socket.io";

export default server => {
  const io = socketIO(server);
  // This is what the socket.io syntax is like, we will work this later

  io.on("connection", socket => {
    console.log("User connected");
    socket.emit("news", { hello: "world" });
    socket.on("disconnect", () => {
      console.log("user disconnected");
    });
  });
};
