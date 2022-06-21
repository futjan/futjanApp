import React, { useEffect, useState, useRef } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { format } from "timeago.js";
import Button from "@mui/material/Button";
import { io } from "socket.io-client";
import IconButton from "@mui/material/IconButton";
import SendIcon from "@mui/icons-material/Send";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  getConversation,
  createSingleConversation,
} from "../components/actions/conversationAction";
import {
  getMessages,
  createMessage,
} from "../components/actions/messageAction";

export default function MessagePopup({ receiverId }) {
  const [currentChat, setCurrentChat] = useState(null);
  const [newMessage, setNewMessage] = useState("");
  const [chats, setChats] = useState([]);
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const auth = useSelector((state) => state.auth);
  const conversation = useSelector((state) => state.conversation.conversation);
  // initialize hook
  const dispatch = useDispatch();
  // useEffect
  useEffect(() => {
    dispatch(getConversation(receiverId));
  }, []);
  useEffect(() => {
    dispatch(getConversation(receiverId));
  }, [auth && auth.user]);
  // socket io
  const socket = useRef();
  useEffect(() => {
    socket.current = io("http://www.futjan.com");
    return () => {
      socket.current.close();
    };
  }, [auth.user]);

  useEffect(() => {
    socket.current.on("getmessage", (data) => {
      setArrivalMessage({
        sender: data.senderId,
        text: data.text,
        createdAt: Date.now(),
      });
    });
    return () => {
      socket.current.off("getmessage");
    };
  }, [socket]);

  // on new message arrival or conversation updat

  useEffect(() => {
    arrivalMessage &&
      currentChat?.members.includes(arrivalMessage.sender) &&
      setChats((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage, currentChat]);

  // }, [currentChat]);

  // add user to server
  useEffect(() => {
    socket.current.emit("adduser", auth.user && auth.user.id);
    socket.current.on("getusers", (users) => {
      // console.log(users);
    });
  }, [auth.user && auth.user.id]);

  // get messages on currentChat changes
  const messages = useSelector((state) => state.message.messages);
  useEffect(() => {
    dispatch(getMessages(currentChat && currentChat._id));
    setChats([...messages]);
  }, [currentChat]);

  useEffect(() => {
    setCurrentChat(conversation);
  }, [conversation && conversation._id]);

  const handleSubmit = async (e) => {
    if (newMessage.length > 0) {
      const message = {
        sender: auth.user && auth.user.id,
        text: newMessage,
        conversationId: currentChat._id,
      };
      const receiverId = await currentChat.members.find(
        (member) => member !== auth.user.id
      );
      socket.current.emit("sendmessage", {
        senderId: auth.user.id,
        receiverId: receiverId,
        text: newMessage,
      });

      setChats([...chats, message]);
      dispatch(createMessage(message, setNewMessage));
      setNewMessage("");
    }
  };

  const startConversation = () => {
    dispatch(createSingleConversation({ receiver: receiverId }));
  };

  const scrollRef = useRef();

  // scroll
  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chats]);
  return (
    <div ref={scrollRef}>
      <Accordion
        sx={{
          width: "260px",
          borderBottomLeftRadius: "0",
          borderBottomRightRadius: "0",
          borderTopLeftRadius: "5px",
          borderTopRightRadius: "5px",
        }}
      >
        <AccordionSummary
          sx={{
            background: "#3b5998",
            color: "#fff",
            fontSize: "15px",
            minHeight: "40px",
            margin: "0",
          }}
          className="message-pop-summary"
          // expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={{ fontSize: "16px" }}>Message us</Typography>
        </AccordionSummary>
        {auth.isAuthenticated === true ? (
          <>
            <div className="message-pop">
              {currentChat && Object.keys(currentChat).length > 0 ? (
                <>
                  <small
                    style={{
                      width: "100%",
                      display: "block",
                      textAlign: "center",
                    }}
                  >
                    We will reply you soon
                  </small>
                  {chats.length > 0
                    ? chats.map((m) => (
                        // <div className="sender-pop">
                        <div
                          className={
                            m.sender !== auth.user.id
                              ? "sender-pop"
                              : "receiver-pop"
                          }
                        >
                          <div className="msg">{m.text}</div>
                          <small>{format(m.created_at)}</small>
                        </div>
                      ))
                    : null}
                </>
              ) : (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Button
                    variant="contained"
                    size="large"
                    onClick={() => startConversation()}
                  >
                    Start conversation
                  </Button>
                </div>
              )}
            </div>
            {currentChat &&
            Object.keys(currentChat).length > 0 &&
            Object.getPrototypeOf(currentChat) === Object.prototype ? (
              <div className="conversation-pop">
                <textarea
                  rows={1}
                  value={newMessage}
                  style={{ outline: "none" }}
                  onChange={(e) => setNewMessage(e.target.value)}
                />
                <IconButton
                  aria-label="delete"
                  size="large"
                  onClick={(e) => handleSubmit(e)}
                >
                  <SendIcon fontSize="large" />
                </IconButton>
              </div>
            ) : null}
          </>
        ) : (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100px",
            }}
          >
            <Link to="/login"> Login to start messages </Link>
          </div>
        )}
      </Accordion>
    </div>
  );
}
