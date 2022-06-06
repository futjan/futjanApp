import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutUser } from "../actions/authAction";
// import InboxIcon from "@mui/icons-material/MoveToInbox";
// import MailIcon from "@mui/icons-material/Mail";

const SideBar = ({ state, setState, isAuthenticated }) => {
  //initialize hook
  const dispatch = useDispatch();
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {isAuthenticated === true
          ? [
              {
                title: "My Account",
                pathname: "/user-panel",
                state: "ACCOUNT",
                icon: <i className="fa fa-user"></i>,
              },
              {
                title: "My Ad",
                pathname: "/user-panel",
                state: "SURPLUS",
                icon: <i className="fa fa-archive"></i>,
              },
              {
                title: "Post Ad",
                pathname: "/user-panel",
                state: "ADD",
                icon: <i className="fa fa-thumb-tack"></i>,
              },
              {
                title: "Message",
                pathname: "/user-panel",
                state: "MESSAGE",
                icon: <i className="fa fa-envelope"></i>,
              },
              {
                title: "Logout",
                pathname: "/",
                state: "",
                icon: <i className="fa fa-power-off"></i>,
              },
            ].map((menu, index) => (
              <>
                <ListItem
                  key={menu.title}
                  disablePadding
                  component={Link}
                  to={menu.pathname}
                  state={{ active: menu.state }}
                  sx={{ fontSize: "16px" }}
                  onClick={
                    menu.title === "Logout"
                      ? () => dispatch(logoutUser())
                      : null
                  }
                >
                  <ListItemButton
                    sx={{
                      borderBottom: "1px solid #DDD",
                      margin: "0 15px",
                      padding: "10px 5px",
                    }}
                  >
                    <ListItemIcon sx={{ minWidth: "30px" }}>
                      {menu.icon}
                      {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                    </ListItemIcon>
                    <ListItemText
                      primary={menu.title}
                      sx={{ fontSize: "16px" }}
                    />
                  </ListItemButton>
                  <Divider />
                </ListItem>
              </>
            ))
          : [
              {
                title: "Login/Register",
                pathname: "/login",
                state: "",
                icon: <i className="fa fa-user"></i>,
              },
            ].map((menu, index) => (
              <>
                <ListItem
                  key={menu.title}
                  disablePadding
                  component={Link}
                  to={menu.pathname}
                  state={{ active: menu.state }}
                  sx={{ fontSize: "16px" }}
                >
                  <ListItemButton
                    sx={{
                      borderBottom: "1px solid #DDD",
                      margin: "0 15px",
                      padding: "10px 5px",
                    }}
                  >
                    <ListItemIcon sx={{ minWidth: "30px" }}>
                      {menu.icon}
                      {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                    </ListItemIcon>
                    <ListItemText
                      primary={menu.title}
                      sx={{ fontSize: "16px" }}
                    />
                  </ListItemButton>
                  <Divider />
                </ListItem>
              </>
            ))}
      </List>
      {/* <Divider /> */}
    </Box>
  );
  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
};
export default SideBar;
