import express from "express";
import { json, urlencoded } from "body-parser";
import morgan from "morgan";
import cors from "cors";
import mongoose from "mongoose";
import usersRouter from "./routes/api/users";
import postsRouter from "./routes/api/posts";
import profileRouter from "./routes/api/profile";

const app = express();

import "dotenv/config";

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(() => console.log("Connected to MONGODB ATLAS"))
  .catch(error => console.log(`error: `, error));

app.disable("x-powered-by");
app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(morgan("dev"));

app.get("/", (req, res) => res.send("Hello World"));
app.use("/api/users", usersRouter);
app.use("/api/post", postsRouter);
app.use("/api/profile", profileRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
