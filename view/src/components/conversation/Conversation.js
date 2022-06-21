import React, { useEffect, useState } from "react";
import ListItem from "@mui/material/ListItem";
import DefaultImage from "../image/default.jpg";
import ListItemButton from "@mui/material/ListItemButton";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import axios from "axios";
export default function Conversation({
  conversation,
  currentUser,
  setCurrentChat,
  currentChat,
  getMessageOfCurrentChat,
  setChatUser,
}) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const friendId = conversation.members.find((m) => m !== currentUser.id);
    const getUser = async () => {
      setLoading(true);
      try {
        const res = await axios(`/api/v1/conversations/user/${friendId}`);
        setUser(res.data);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, [currentUser, conversation]);
  return loading === true ? (
    <>
      <div
        style={{
          padding: "4px 10px",
          width: "100%",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          gap: "15px",
          marginBottom: "5px",
          borderTop: "1px solid #ddd",
        }}
      >
        <Skeleton count={1} circle={true} width="50px" height="50px" />
        <Skeleton count={1} width="135px" height="20px" />
      </div>
      <div
        style={{
          padding: "4px 10px",
          width: "100%",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          gap: "15px",
          marginBottom: "5px",
          borderTop: "1px solid #ddd",
        }}
      >
        <Skeleton count={1} circle={true} width="50px" height="50px" />
        <Skeleton count={1} width="135px" height="20px" />
      </div>
    </>
  ) : (
    <ListItem
      sx={
        currentChat && currentChat._id === conversation._id
          ? {
              width: "100%",
              borderTop: "1px solid #ddd",
              padding: "0",
              background: "rgba(0, 0, 0, 0.04)",
            }
          : {
              width: "100%",
              borderTop: "1px solid #ddd",
              padding: "0",
            }
      }
      onClick={() => {
        setCurrentChat(conversation);
        getMessageOfCurrentChat(conversation);
        setChatUser(user && user.name);
      }}
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
