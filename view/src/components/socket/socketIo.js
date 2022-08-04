import { io } from "socket.io-client";

// let socket = io("http://localhost:8000/", {
let socket = io("http://www.futjan.com/", {
  secure: true,
  reconnect: true,
});

export default socket;
