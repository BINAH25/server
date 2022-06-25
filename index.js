import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import morgan from "morgan";
import dotenv from "dotenv";
import cors from "cors";
// Routes
import AuthRouter from "./Routes/AuthRouter.js";
import UserRouter from "./Routes/UserRouter.js";
import PostRouter from "./Routes/PostRouter.js";
import UploadRouter from "./Routes/UploadRouter.js";

const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;
// Mongo DB connection
mongoose.connect(
  process.env.MONG_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to MongoDB");
  }
);

//middleware
app.use(morgan("common"));
app.use(cors());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

// to serve images inside public folder
app.use(express.static("public"));
app.use("/images", express.static("images"));

// routes usage

app.use("/auth", AuthRouter);
app.use("/user", UserRouter);
app.use("/post", PostRouter);
app.use("/upload", UploadRouter);

app.listen(PORT, () => {
  console.log("the server is listening");
});
