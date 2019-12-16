import express from "express";
import cors from "cors";

import connectMongoDB from "./config/mongoConfig";
import "dotenv/config";

const app = express();

app.disable("x-powered-by");
app.use(cors());
app.use(express.json({ extended: false }));

connectMongoDB();

app.get("/", (req, res) => res.send("API Running"));

app.use("/api/users", require("./routes/api/users"));
app.use("/api/post", require("./routes/api/post"));
app.use("/api/profile", require("./routes/api/profile"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
