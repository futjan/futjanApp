const express = require("express");
const morgan = require("morgan");
const path = require("path");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const hpp = require("hpp");
const app = express();
const authController = require("./controllers/authController");
const userRoutes = require("./routes/userRoutes");
const globalErrorHandler = require("./controllers/errorController");
// 1) GLOBAL MIDDLLEWARES
// set security HTTP headers
app.use(helmet());
// Development logging
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
// express body-parser
app.use(express.json());

// data sanitization  against NoSQL query injection
app.use(mongoSanitize());
// data sanitization  against xss
app.use(xss());
// prevent parameter pollution
app.use(hpp());
// 2) Routes
app.use("/api/v1/users", userRoutes);

if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("view/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "view", "build", "index.html"));
  });
}

app.use(globalErrorHandler);

module.exports = app;
