require("dotenv").config();

const http = require("http");

const app = require("./src/app");

const { Server } = require("socket.io");

const PORT = process.env.PORT || 5000;

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
  },
});
const authRoutes = require("./src/routes/authRoutes");

app.use("/api/auth", authRoutes);

// SOCKET EVENTS
io.on("connection", (socket) => {

  console.log("User Connected:", socket.id);

  // JOIN ROOM
  socket.on("join-room", (roomId) => {

    socket.join(roomId);

    console.log(`User joined room: ${roomId}`);

    socket.to(roomId).emit("user-joined", socket.id);

  });

  // SEND SIGNAL
  socket.on("signal", (data) => {

    socket.to(data.roomId).emit(
      "signal",
      data
    );

  });

  // DISCONNECT
  socket.on("disconnect", () => {

    console.log("User Disconnected");

  });

});


server.listen(PORT, () => {

  console.log(`Server running on port ${PORT}`);

});