import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
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

export const login = async (req, res) => {
  const { email, password, mobile } = req.body;
  try {
    const validUser = await User.findOne({ email });
    if (!validUser) return res.status(400).json("User Not Found");
    const validPassword = bcrypt.compareSync(password, validUser.password);
    if (!validPassword) return res.status(400).json("Invalid Credentials");
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
    const { password: pass, ...rest } = validUser._doc;
    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json(rest);
  } catch (error) {
    console.log("error in login controller");
    console.log(error);
  }
};
