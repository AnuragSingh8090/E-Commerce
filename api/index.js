import dotenv from "dotenv";
import express from "express";
import { connectDB } from "./config/connectDB.js";
import authRouters from "./routes/authRoute.js";
dotenv.config();
const app = express();

app.use(express.json());
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log("Server running on port: 5000");
  connectDB();
});

app.use("/api/auth", authRouters);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
