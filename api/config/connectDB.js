import mongoose from "mongoose";

export const connectDB = () => {
  try {
    mongoose.connect(process.env.MONGODB_URL);
    console.log(`MONGODB CONNECTED SUCCESSFULLY`);
  } catch (error) {
    console.log("MongoDb connection error");
    console.log(error);
  }
};
