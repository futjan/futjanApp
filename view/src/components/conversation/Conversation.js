import React, { useEffect, useState } from "react";
import ListItem from "@mui/material/ListItem";
import DefaultImage from "../image/default.jpg";
import ListItemButton from "@mui/material/ListItemButton";
import axios from "axios";
export default function Conversation({
  conversation,
  currentUser,
  setCurrentChat,
  currentChat,
}) {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const friendId = conversation.members.find((m) => m !== currentUser.id);
    const getUser = async () => {
      try {
        const res = await axios(`/api/v1/conversations/user/${friendId}`);
        setUser(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, [currentUser, conversation]);
  return (
    <ListItem
      sx={
        currentChat && currentChat._id === conversation._id
          ? {
              width: "100%",
              borderBottom: "1px solid #ddd",
              padding: "0",
              background: "rgba(0, 0, 0, 0.04)",
            }
          : {
              width: "100%",
              borderBottom: "1px solid #ddd",
              padding: "0",
            }
      }
      onClick={() => setCurrentChat(conversation)}
    >
      <ListItemButton>
        <div className="converstions">
          <img src={DefaultImage} width="40" />
          <div className="msg">
            <p className="name">{user && user.name}</p>
          </div>
        </div>
      </ListItemButton>
    </ListItem>
  );
}
