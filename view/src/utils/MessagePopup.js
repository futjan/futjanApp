import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function MessagePopup() {
  const auth = useSelector((state) => state.auth);

  return (
    <div>
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
          // expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={{ fontSize: "16px" }}>Message us</Typography>
        </AccordionSummary>
        {auth.isAuthenticated === true ? (
          <>
            <div className="message-pop">
              <div className="sender-pop">
                <div className="msg">Under Processing</div>
                <small>1 hour</small>
              </div>
              <div className="receiver-pop">
                <div className="msg">Under Processing</div>
                <small>1 hour</small>
              </div>
            </div>
            <div className="conversation-pop">
              <textarea rows={1} />
              <Button variant="contained" color="primary">
                Send
              </Button>
            </div>
          </>
        ) : (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Link to="/login"> Login to start messages </Link>
          </div>
        )}
      </Accordion>
    </div>
  );
}
