const express = require("express");
const morgan = require("morgan");
const path = require("path");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const hpp = require("hpp");
const app = express();
const userRoutes = require("./routes/userRoutes");
const surplusRoutes = require("./routes/surplusRoutes");
const businessTypeRoutes = require("./routes/businessTypeRoutes");
const reviewRoutes = require("./routes/reviewRoutes");
const purchingRoutes = require("./routes/purchingRoutes");
const globalErrorHandler = require("./controllers/errorController");
// 1) GLOBAL MIDDLLEWARES
// set security HTTP headers
app.use(
  helmet.contentSecurityPolicy({
    useDefaults: false,
    directives: {
      "default-src": ["'self'"],
      "style-src": null,
      "img-src": ["'self' data: blob:", "futjan.s3.ap-south-1.amazonaws.com"],
    },
  })
);
// Development logging
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
// express body-parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// data sanitization  against NoSQL query injection
app.use(mongoSanitize());
// data sanitization  against xss
app.use(xss());
// prevent parameter pollution
app.use(hpp());
// 2) Routes
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/surplus", surplusRoutes);
app.use("/api/v1/businesstype", businessTypeRoutes);
app.use("/api/v1/review", reviewRoutes);
app.use("/api/v1/purching", purchingRoutes);

if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("view/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "view", "build", "index.html"));
  });
}

app.use(globalErrorHandler);

module.exports = app;
