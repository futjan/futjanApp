import React, { useEffect, useState } from "react";

import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
// import MenuIcon from '@mui/icons-material/Menu';
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DefaultImage from "../image/default.jpg";
import { getConversations } from "../actions/conversationAction";
import { useDispatch, useSelector } from "react-redux";
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
  const [conversations, setConversations] = useState([]);

  const [open, setOpen] = React.useState(true);
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

  return (
    <Box sx={{ display: "flex" }}>
      {/* <CssBaseline /> */}
      {/* <AppBar position="fixed" open={open}> */}
      <AppBar
        position="absolute"
        open={open}
        sx={{ background: "#3b5998", boxShadow: "none" }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            {/* <MenuIcon /> */}
            Conversations
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Chats
          </Typography>
        </Toolbar>
      </AppBar>
      <div style={{ position: "relative", width: drawerWidth }}>
        <Drawer
          sx={{
            zIndex: "1",
            position: "relative",
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <DrawerHeader
            // sx={{ background: "#3b5998", color: "#fff", border: "none" }}
            sx={{
              background: "#fff",
              color: "#000",
              border: "none",
              textAlign: "left",
              display: "flex",
              justifyContent: "flex-start",
              fontSize: "16px",
            }}
          >
            Conversation
            {/* <IconButton onClick={handleDrawerClose}> */}
            {/* {theme.direction === "ltr"
                ? //   <ChevronLeftIcon />
                  "L"
                : //   <ChevronRightIcon />
                  "R"} */}
            {/* </IconButton> */}
          </DrawerHeader>
          {/* <Divider /> */}
          <List>
            <ListItem
              sx={{
                width: "100%",
                borderBottom: "1px solid #ddd",
                padding: "0",
              }}
            >
              <ListItemButton>
                <div className="converstions">
                  <img src={DefaultImage} width="40" />
                  <div className="msg">
                    <p className="name">John</p>
                    <p className="text">OK</p>
                  </div>
                </div>
              </ListItemButton>
            </ListItem>
            <ListItem
              sx={{
                width: "100%",
                borderBottom: "1px solid #ddd",
                padding: "0",
              }}
            >
              <ListItemButton>
                <div className="converstions">
                  <img src={DefaultImage} width="40" />
                  <div className="msg">
                    <p className="name">John</p>
                    <p className="text">OK</p>
                  </div>
                </div>
              </ListItemButton>
            </ListItem>
            <ListItem
              sx={{
                width: "100%",
                borderBottom: "1px solid #ddd",
                padding: "0",
              }}
            >
              <ListItemButton>
                <div className="converstions">
                  <img src={DefaultImage} width="40" />
                  <div className="msg">
                    <p className="name">John</p>
                    <p className="text">OK</p>
                  </div>
                </div>
              </ListItemButton>
            </ListItem>
          </List>
        </Drawer>
      </div>
      <div style={{ position: "relative", width: "100%" }}>
        <Main
          open={open}
          sx={{
            background: "#f5f5f5",
            padding: "72px 20px 20px 20px",
            minHeight: "200px",
            maxHeight: "500px",
            overflowY: "auto",
            position: "relative",
          }}
        >
          {/* <DrawerHeader /> */}
          <div className="sender">
            <div className="msg-container">
              <img src={DefaultImage} width="40" />
              <div className="msg">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do
                </p>
              </div>
            </div>
            <small>1 hour</small>
          </div>
          <div className="sender">
            <div className="msg-container">
              <img src={DefaultImage} width="40" />
              <div className="msg">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do
                </p>
              </div>
            </div>
            <small>1 hour</small>
          </div>
          <div className="receiver">
            <div className="msg-container">
              <img src={DefaultImage} width="40" />
              <div className="msg">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do
                </p>
              </div>
            </div>
            <small>1 hour</small>
          </div>
          <div className="receiver">
            <div className="msg-container">
              <img src={DefaultImage} width="40" />
              <div className="msg">
                <p>ok</p>
              </div>
            </div>
            <small>1 hour</small>
          </div>
        </Main>
        <div className="msg-send">
          <textarea rows={1} placeholder="message" />
          <Button variant="contained" color="success" size="large">
            Send
          </Button>
        </div>
      </div>
    </Box>
  );
};
export default Index;
