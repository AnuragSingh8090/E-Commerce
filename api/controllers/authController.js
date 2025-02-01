import bcrypt from "bcryptjs";
import User from "../models/userModel.js";
export const signup = async (req, res) => {
  const { username, email, password, mobile } = req.body;
  if (
    !username ||
    !email ||
    !password ||
    !mobile ||
    username === "" ||
    email === "" ||
    password === "" ||
    mobile === ""
  ) {
    return res.status(404).json("All Fields are required");
  }
  const hashedPassword = bcrypt.hashSync(password, 10);
  const newUser = new User({
    username,
    email,
    password: hashedPassword,
    mobile,
  });
  try {
    await newUser.save();
    res.status(200).json("User Sign Up successfully...!");
  } catch (error) {
    console.log("error in signup route");
    console.log(error);
  }
};
