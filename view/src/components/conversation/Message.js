// import "./message.css";
import DefaultImage from "../image/default.jpg";
import { format } from "timeago.js";

export default function Message({ message, currentUser }) {
  return (
    <div className={currentUser !== message.sender ? "sender" : "receiver"}>
      <div className="msg-container">
        <img src={DefaultImage} width="40" />
        <div className="msg">
          <p>{message.text}</p>
        </div>
      </div>
      <small>{format(message.created_at)}</small>
    </div>
  );
}
