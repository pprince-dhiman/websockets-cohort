import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });

// event handler
wss.on("connection", (socket) => {
  socket.on("message", (data) => {
    if (data.toString() === "ping") {
      socket.send("pong");
    }
  });
});
