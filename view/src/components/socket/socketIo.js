import { io } from "socket.io-client";

// let socket = io("http://localhost:8000/", {
let socket = io("http://www.futjan.com/", {
  // secure: fal,
  reconnect: true,
});

export default socket;
