import { configDotenv } from "dotenv";
import express from "express";
import connectDB from "./config/mongodb.js";
import userRouter from "./routers/userRouter.js";
import cors from "cors";

const app = express();
const port = process.env.PORT || 3001;

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

configDotenv();
app.use(express.json());
app.use("/api/user", userRouter);

app.get("/", (req, res) => {
  res.send("cors is working ");
});
const StartServer = async () => {
  await connectDB();
  try {
    app.listen(port, () => {
      console.log(`Server is running at http://localhost:${port}`);
    });
  } catch (error) {
    console.log("failed to load the server ", error);
  }
};

StartServer();
