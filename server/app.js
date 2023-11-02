const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const globalErrorHandler = require("./controllers/errorController");
const AppError = require("./utils/appError");

const postRouter = require("./routes/postRoutes");
const userRouter = require("./routes/userRoutes");

const app = express();

// MIDDLEWARES

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(cookieParser());
app.use(cors({ credentials: true, origin: "http://localhost:5173" }));
app.use(express.json());

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  console.log(req.cookies);

  next();
});

// ROUTER MIDDLEWARE
app.use("/api/v1/posts", postRouter);
app.use("/api/v1/users", userRouter);

// unhandled routes --> should be last
app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server.`, 404));
});

// will call it when there is error (handler params --> err, req, res, next)
app.use(globalErrorHandler);

module.exports = app;

///////////////////////////////////////////////
// const err = new Error(`Can't find ${req.originalUrl} on this server.`);
// err.statusCode = 404;
// err.status = "fail";

// // this will pass err to globalErrorHandler
// // whatever we pass in next it will assume there is an error
// next(err);
