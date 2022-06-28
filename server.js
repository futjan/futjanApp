const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const app = require("./app");
const http = require("http");
const { Server } = require("socket.io");
const devcert = require("devcert");

process.on("uncaughtException", (err) => {
  console.log("UNCAUGHT EXCEPTION! 💥 Shutting down...");
  console.log(err.name, err.message);
  process.exit(1);
});

mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
  })
  .then(() => console.log("DATEBASE CONNECTED!"))
  .catch((err) => console.log(err));

const port = process.env.PORT || 8000;

// const ssl = devcert.certificateFor("localhost");

const server = http.createServer( app);

// socket io configration
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST", "PATCH", "DELETE"],
    transports: ["websocket", "polling"],
  },
  allowEIO3: true,
});

let users = [];

const addUser = (userId, socketId) => {
  !users.some((user) => user.userId === userId) &&
    users.push({ userId, socketId });
};

const removeUser = (socketId) => {
  users = users.filter((user) => user.socketId !== socketId);
};

const getUser = (userId) => {
  return users.find((user) => user.userId === userId);
};

io.on("connection", (socket) => {
  console.log("user is connect");
  //take userId and socketId from user
  socket.on("adduser", (userId) => {
    addUser(userId, socket.id);
  });
  // get all user
  io.emit("getusers", users);

  //send and get message
  socket.on("sendmessage", ({ senderId, receiverId, text }) => {
    const user = getUser(receiverId);
    if (user) {
      io.to(user.socketId).emit("getmessage", {
        senderId,
        text,
      });
    }
  });

  // remove user
  socket.on("disconnect", () => {
    removeUser(socket.id);
    io.emit("getusers", users);
  });
});

server.listen(port, () => {
  console.log(`server is running on port ${process.env.PORT}`);
});

process.on("unhandledRejection", (err) => {
  console.log("UNHANDLED REJECTION! 💥 Shutting down...");
  // console.log(err.name, err.message);
  console.log(err);
  server.close(() => {
    process.exit(1);
  });
});
