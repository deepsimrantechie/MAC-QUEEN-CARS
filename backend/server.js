import express from "express";
import connectDB from "./config/mongodb.js";
import "dotenv/config";
import userRouter from "./routes/userRouter.js";

// App configuration
const app = express();
const port = process.env.PORT || 4000;

// Middleware
app.use(express.json()); // Parses incoming JSON request bodies
app.use(express.urlencoded({ extended: true })); // Parses URL-encoded data

// Connect to database
connectDB();

// API endpoints
app.use("/api/user", userRouter);
app.get("/", (req, res) => {
  console.log("API WORKING");
  res.send("Welcome to the API!");
});

// Start server
app.listen(port, () => console.log(`Server is running on port ${port}`));
