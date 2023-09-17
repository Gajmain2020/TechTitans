import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import Admin from "../Models/admin.js";
import User from "../Models/user.js";
import Complaints from "../Models/complaints.js";

export const signupUser = async (req, res) => {
  try {
    const userData = req.body;
    const isUserSignedUp = await User.findOne({ email: userData.email });
    if (isUserSignedUp) {
      return res.status(403).json({
        message: "User existing already. Please Login...",
        success: false,
      });
    }
    const hashPassword = await bcrypt.hash(userData.password, 10);
    const hashAadhar = await bcrypt.hash(userData.aadhar, 6);
    const hashPan = await bcrypt.hash(userData.pan, 6);

    await User.create({
      name: userData.name,
      email: userData.email,
      password: hashPassword,
      mobile: userData.mobile,
      proofs: {
        pan: hashPan,
        aadhar: hashAadhar,
      },
      borrowings: [],
      lending: [],
    });
    return res
      .status(200)
      .json({ message: "User Signed Up Successfully", success: true });
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error. Please try again later.",
      success: false,
    });
  }
};

export const loginUser = async (req, res) => {
  try {
    const userData = req.body;
    const user = await User.findOne({ email: userData.email });

    // checking if the email exists or not
    if (!user) {
      return res
        .status(404)
        .json({ message: "Invalid username or password.", success: false });
    }

    //matching password
    const isPasswordCorrect = await bcrypt.compare(
      userData.password,
      user.password
    );
    if (!isPasswordCorrect) {
      return res
        .status(401)
        .json({ message: "Invalid username or password.", success: false });
    }

    const token = jwt.sign({ name: user.name, id: user._id }, "PRIVATE_KEY", {
      expiresIn: "1h",
    });

    return res
      .cookie("authToken", token)
      .status(200)
      .json({ message: "Login Successful...", success: true });
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error. Please try again later",
      success: false,
    });
  }
};

export const postComplaint = async (req, res) => {
  try {
    const complaintData = req.body;
    const alreadyExists = await Complaints.findOne({
      complainerName: complaintData.name,
      complainerEmail: complaintData.email,
      complaintTitle: complaintData.title,
      complaintDescription: complaintData.description,
    });
    if (alreadyExists) {
      return res.status(403).json({
        message: "Exact same complaint already posted.",
        success: false,
      });
    }
    Complaints.create({
      complainerName: complaintData.name,
      complainerEmail: complaintData.email,
      complaintTitle: complaintData.title,
      complaintDescription: complaintData.description,
    });
    return res
      .status(200)
      .json({ message: "Complaint posted successfully", success: true });
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error. Please try again",
      success: false,
    });
  }
};

export const test = async (req, res) => {
  console.log("helllllo");
  return res.status(200).json({ message: "hello from controller" });
};
