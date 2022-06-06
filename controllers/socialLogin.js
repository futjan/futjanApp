const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.Google_Client_ID,
      clientSecret: process.env.Google_Client_Secret,
      callbackURL: "/auth/google/callback",
    },
    (accessToken, refreshToken, profile, cb) => {
      console.log("access token", accessToken);
      console.log("refresh token", refreshToken);
      console.log("profile", profile);
      console.log("cb", done);
    }
  )
);

module.exports = passport;
