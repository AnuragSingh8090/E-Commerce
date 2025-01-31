import dotenv from "dotenv";
import express from "express";
import { connectDB } from "./config/connectDB";
dotenv.config();
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log("Server running on port: 5000");
  connectDB();
});
