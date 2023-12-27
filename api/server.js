import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
import UserRouter from "./src/routers/UserRouter.js";
dotenv.config();

const app = express();

const PORT = process.env.PORT || 8000;

//middlewares
app.use(express.json());
app.use(cors("dev"));
app.use(morgan());

//database

//router
app.use("/user", UserRouter);

//global error handler

app.use((error, req, res, next) => {
  console.log(error);
  const statusCode = error.statusCode || 404;

  res.status(statusCode).json({
    status: "error",
    message: error.message,
  });
});

app.listen(PORT, (error) => {
  error ? console.log(error) : console.log(`server running at ${PORT}`);
});
