import React, { useEffect, useState } from "react";
import ListItem from "@mui/material/ListItem";
import DefaultImage from "../image/default.jpg";
import ListItemButton from "@mui/material/ListItemButton";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";

import axios from "axios";
import fileURL from "../../utils/fileURL";
export default function Conversation({
  conversation,
  currentUser,
  setCurrentChat,
  currentChat,
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

        setChatUser(user && user.name);
      }}
    >
      <ListItemButton>
        <div className="converstions">
          {conversation && conversation.ad && conversation.ad.image ? (
            <img
              src={fileURL(conversation.ad.image)}
              alt={conversation.ad.adType}
              width="50"
            />
          ) : (
            <img src={DefaultImage} width="50" />
          )}
          <div className="msg">
            <p className="name">{user && user.name}</p>
            {conversation &&
            conversation.ad &&
            conversation.ad.adType === "jobs" ? (
              <Link
                to={`/job-detail/${conversation.ad.ad}`}
                style={{ fontSize: "14px", textDecoration: "underline" }}
              >
                Ad Link
              </Link>
            ) : null}
            {conversation &&
            conversation.ad &&
            conversation.ad.adType === "surplus" ? (
              <Link
                to={`/surplus-detail/${conversation.ad.ad}`}
                style={{ fontSize: "14px", textDecoration: "underline" }}
              >
                Ad Link
              </Link>
            ) : null}
            {conversation &&
            conversation.ad &&
            conversation.ad.adType === "jobseekers" ? (
              <Link
                to={`/job-seeker-detail/${conversation.ad.ad}`}
                style={{ fontSize: "14px", textDecoration: "underline" }}
              >
                Ad Link
              </Link>
            ) : null}
          </div>
        </div>
      </ListItemButton>
    </ListItem>
  );
}
