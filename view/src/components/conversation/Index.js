import React, { useEffect, useState, useRef } from "react";

import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";

import IconButton from "@mui/material/IconButton";
import SendIcon from "@mui/icons-material/Send";

import Conversation from "./Conversation";
import Message from "./Message";

import { getConversations } from "../actions/conversationAction";
import { getMessages, createMessage } from "../actions/messageAction";
import { useDispatch, useSelector } from "react-redux";
import { io } from "socket.io-client";
const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const Index = (props) => {
  const [open, setOpen] = React.useState(true);
  const [currentChat, setCurrentChat] = useState(null);
  const [newMessage, setNewMessage] = useState("");
  const [chats, setChats] = useState([]);
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const [chatUser, setChatUser] = useState("");

  // get state from store
  const auth = useSelector((state) => state.auth);
  const conversations = useSelector(
    (state) => state.conversation.conversations
  );
  const messages = useSelector((state) => state.message);
  const scrollRef = useRef();
  // initialize hook
  const dispatch = useDispatch();
  // useEffect
  useEffect(() => {
    dispatch(getConversations());
  }, []);
  const theme = useTheme();
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  // socket io setup
  const socket = useRef();
  useEffect(() => {
    socket.current = io("http://www.futjan.com");
    // socket.current = io("http://localhost:8000");
    return () => {
      socket.current.close();
    };
  }, [auth.user]);

  useEffect(() => {
    socket.current.on("getmessage", (data) => {
      setArrivalMessage({
        conversationId: data.conversationId,
        sender: data.senderId,
        text: data.text,
        createdAt: Date.now(),
      });
    });
    return () => {
      socket.current.off("getmessage");
    };
  }, [socket]);

  // useEffect(() => {

  // }, [socket]);

  useEffect(() => {
    if (chats.length === 0) {
      setChats(messages.messages);
    }
  }, [messages.messages]);

  useEffect(() => {
    arrivalMessage &&
      currentChat?.members.includes(arrivalMessage.sender) &&
      currentChat?._id === arrivalMessage.conversationId &&
      setChats((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage, currentChat]);

  useEffect(() => {
    socket.current.emit("adduser", auth.user && auth.user.id);
  }, [auth.user && auth.user.id]);

  useEffect(() => {
    if (currentChat && currentChat._id) {
      dispatch(getMessages(currentChat && currentChat._id));
      // setChats([...messages.messages]);
      setChats([]);
    }
  }, [currentChat && currentChat._id]);

  const handleSubmit = async (e) => {
    if (newMessage.length > 0) {
      const message = {
        sender: auth.user && auth.user.id,
        text: newMessage,
        conversationId: currentChat._id,
      };
      const receiverId = currentChat.members.find(
        (member) => member !== auth.user.id
      );
      socket.current.emit("sendmessage", {
        senderId: auth.user && auth.user.id,
        receiverId: receiverId,
        text: newMessage,
        conversationId: currentChat._id,
      });

      setChats([...chats, message]);
      dispatch(createMessage(message, setNewMessage));
      setNewMessage("");
    }
  };

  // scroll
  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chats]);
  return conversations.length > 0 ? (
    <Box sx={{ display: "flex" }}>
      {/* <AppBar
        position="relative"
        sx={{ background: "#3b5998", boxShadow: "none" }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ textTransform: "capitalize" }}
          >
            {chatUser}
          </Typography>
        </Toolbar>
      </AppBar> */}
      <div
        style={{
          position: "relative",
          width: "300px",
          background: "#f5f5f5",
          borderRight: "1px solid #ddd",
        }}
      >
        <div style={{ fontSize: "18px", background: "#fff" }}>
          <div
            style={{
              fontSize: "18px",
              background: "#fff",
              padding: "20px",
              height: "70px",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            Chats
          </div>
          <List sx={{ margin: "0", padding: "0" }}>
            {conversations.length > 0
              ? conversations.map((conversation) => (
                  <Conversation
                    conversation={conversation}
                    currentUser={auth.user}
                    setCurrentChat={setCurrentChat}
                    currentChat={currentChat}
                    setChatUser={setChatUser}
                  />
                ))
              : null}
          </List>
        </div>
      </div>
      <div style={{ position: "relative", width: "100%" }}>
        <div
          style={{
            color: "#fff",
            fontSize: "18px",
            background: "#3b5998",
            padding: "20px",
            height: "70px",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            textTransform: "capitalize",
          }}
        >
          {chatUser}
        </div>
        <Main
          open={open}
          sx={{
            background: "#f5f5f5",
            padding: "20px",
            minHeight: "200px",
            maxHeight: "500px",
            overflowY: "auto",
            position: "relative",
          }}
        >
          {messages.loading !== true ? (
            currentChat && chats.length > 0 ? (
              chats.map((m) => (
                <Message
                  message={m}
                  currentUser={auth.user && auth.user.id}
                  ref={scrollRef}
                />
              ))
            ) : (
              <small>No messages</small>
            )
          ) : (
            <h1>loading</h1>
          )}
        </Main>
        {currentChat ? (
          <div className="msg-send">
            <textarea
              rows={1}
              placeholder="message"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
            />
            <Button
              variant="contained"
              color="success"
              size="large"
              endIcon={<SendIcon sx={{ fontSize: "14px" }} />}
              onClick={(e) => handleSubmit(e)}
            >
              Send
            </Button>
          </div>
        ) : null}
      </div>
    </Box>
  ) : (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "200px",
        background: "#fff",
      }}
    >
      <p style={{ margin: "0", fontSize: "18px", color: "#666666" }}>
        No conversation avalable{" "}
      </p>
    </div>
  );
};
export default Index;
