import React from "react";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { GoogleLogin } from "react-google-login";

export default function NewCustomer() {
  const navigate = useNavigate();

  const responseGoogle_success_signUp = (response) => {
    const { tokenObj, profileObj } = response;

    navigate(`/set-password/${tokenObj.id_token}`, {
      state: {
        email: profileObj && profileObj.email,
        name: profileObj && profileObj.name,
        profile: profileObj && profileObj.imageUrl,
        token: tokenObj && tokenObj.id_token,
      },
    });
  };

  const responseGoogle_error = (err) => {
    console.log(err);
  };
  return (
    <div className="well">
      <h2>New Customer</h2>
      <p>
        <strong>Register Account</strong>
      </p>
      <p>
        By creating an account you will be able to shop faster, be up to date on
        an order's status, and keep track of the orders you have previously
        made.
      </p>

      <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
        buttonText="Sign up with Google"
        onSuccess={responseGoogle_success_signUp}
        onFailure={responseGoogle_error}
        className="google-login-button"
      />
      <div style={{ float: "left" }}>
        <Link to="/signup" className="btn btn-primary signup-btn">
          <MailOutlineIcon
            fontSize="large"
            sx={{
              width: "35px",
              height: "22px",
            }}
          />
          Sign up with Email
        </Link>
      </div>
    </div>
  );
}
