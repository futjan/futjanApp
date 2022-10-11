import { io } from "socket.io-client";

// let socket = io("http://localhost:8000/", {
let socket = io(
  `${window.location.href.split("/")[0]}://${
    window.location.href.split("/")[2]
  }/`,
  {
    // secure: fal,
    reconnect: true,
  }
);

export default socket;
