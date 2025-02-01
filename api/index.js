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
