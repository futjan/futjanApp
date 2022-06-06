import React from "react";
import Dialog from "@mui/material/Dialog";
import { Link } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import successImage from "../components/image/success-image-png.gif";
import Slide from "@mui/material/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const FullScreenModal = ({ open, title, setOpen }) => {
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative", background: "#3b5998" }}>
          <Container>
            <Toolbar>
              <Typography sx={{ ml: 2, flex: 1 }} variant="h4" component="div">
                Ad Successfully Posted!
              </Typography>
              {/* <Button autoFocus color="inherit" onClick={handleClose}>
                save
              </Button> */}
            </Toolbar>
          </Container>
        </AppBar>

        <Container>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img src={successImage} alt="success msg" width="25%" />
          </div>
          <br />
          <br />
          <Typography sx={{ ml: 2, flex: 1 }} variant="h4" component="div">
            Thank You!
          </Typography>
          <br />
          <Typography
            sx={{ ml: 2, flex: 1, position: "relative" }}
            variant="p"
            component="div"
          >
            Thanks for posting your ad '
            <span className="productName">{title}</span>'
          </Typography>
          <br />
          <Typography sx={{ ml: 2, flex: 1 }} variant="p" component="div">
            We moderate listings in order to follow safety practices, which can
            sometimes take a few hours. Once your ad has been approved, it will
            be avaiable to view here. we will send a confirmation email to which
            you can use to edit or delete your ad in future.
          </Typography>
          {/* <br />
          <Typography sx={{ ml: 2, flex: 1 }} variant="p" component="div">
            
          </Typography> */}
          <br />
          <Typography sx={{ ml: 2, flex: 1 }} variant="p" component="div">
            For more information on our ad policy, check out "Where is my ad?"
            on our FAQ page
          </Typography>
          <Stack spacing={2} direction="row">
            <Button
              variant="text"
              size="large"
              sx={{ color: "#3b5998", fontWeight: "bold" }}
              component={Link}
              to="/"
              onClick={() => setOpen(false)}
            >
              Home
            </Button>
            <Button
              size="large"
              variant="contained"
              // sx={{ background: "#3b5998" }}
              component={Link}
              to="/user-panel"
              state={{ active: "ADD" }}
              onClick={() => setOpen(false)}
            >
              Post another ad
            </Button>
            <Button
              variant="outlined"
              size="large"
              sx={{ color: "#3b5998", borderColor: "#3b5998" }}
              component={Link}
              to="/user-panel"
              state={{ active: "SURPLUS" }}
              onClick={() => setOpen(false)}
            >
              Manage My ads
            </Button>
          </Stack>
        </Container>
        {/* <List>
          <ListItem button>
            <ListItemText primary="Phone ringtone" secondary="Titania" />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText
              primary="Default notification ringtone"
              secondary="Tethys"
            />
          </ListItem>
        </List> */}
      </Dialog>
    </div>
  );
};

export default FullScreenModal;
