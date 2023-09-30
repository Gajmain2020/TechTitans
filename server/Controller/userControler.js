import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import Admin from "../Models/admin.js";
import User from "../Models/user.js";
import Complaints from "../Models/complaints.js";
import Faculty from "../Models/faculty.js";

export const fetchRequests = async (req, res) => {
  try {
    const users = await User.find({ processed: false });
    return res
      .status(200)
      .json({ users, message: "data sent successfully", success: true });
  } catch (error) {
    return res.status(500).json({
      message: "something went wrong. Please try again.",
      success: false,
    });
  }
};

export const approveRequest = async (req, res) => {
  try {
    const userId = req.body.id;
    const user = await User.findById(userId);
    user.processed = true;
    user.save();
    return res.status(200).json({ message: "student approved", success: true });
  } catch (error) {
    return res.status(500).json({
      message: "something went wrong. Please try again",
      success: false,
    });
  }
};

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

    const user = await User.create({
      name: userData.name,
      email: userData.email,
      password: hashPassword,
      mobile: userData.mobile,
      urn: userData.urn,
      reffral: userData.reffral,
      borrowings: [],
      lending: [],
    });
    const token = jwt.sign({ name: user.name, id: user._id }, "PRIVATE_KEY");
    return res.status(200).json({
      id: user._id,
      token,
      name: user.name,
      message: "User Signed Up Successfully.",
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal Server Error. Please try again later.",
      success: false,
    });
  }
};

export const signupFaculty = async (req, res) => {
  const user = await Faculty.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    reffrals: req.body.reffral,
  });
  return res
    .status(200)
    .json({ message: "user created successfully", success: true });
};

export const loginFaculty = async (req, res) => {
  try {
    const fact = await Faculty.findOne({ email: req.body.email });
    if (!fact) {
      return res
        .status(404)
        .json({ message: "User not found", success: false });
    }
    const passChk = fact.password === req.body.password;
    if (passChk) {
      return res.status(200).json({
        message: "login successful",
        success: true,
        id: fact._id,
        name: fact.name,
      });
    }
    return res.status(403).json({ message: "Login failed.", success: false });
  } catch (error) {
    return res.status(500).json({ message: error.message, success: false });
  }
};

export const loginUser = async (req, res) => {
  try {
    const userData = req.body;
    const user = await User.findOne({ email: userData.email });

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
    console.log(isPasswordCorrect);
    if (!isPasswordCorrect) {
      return res
        .status(401)
        .json({ message: "Invalid username or password.", success: false });
    }

    const token = jwt.sign({ name: user.name, id: user._id }, "PRIVATE_KEY");

    return res.cookie("token", token).status(200).json({
      message: "Login Successful...",
      id: user._id,
      token: token,
      name: user.name,
      success: true,
    });
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

export const updateUserDetails = async (req, res) => {
  try {
    const { oldUserData, newUserData } = req.body;
    const oldUser = await User.findById(oldUserData.id);
    if (!oldUser) {
      return res.status(404).json({
        message:
          "No user with id " + oldUserData.id + " exists in the database.",
        success: false,
      });
    }
    const chkPassword = await bcrypt.compare(
      oldUserData.password,
      oldUser.password
    );
    if (!chkPassword) {
      return res.status(401).json({
        message: "Password is incorrect. Please try again.",
        success: false,
      });
    }
    oldUser.name = newUserData?.name || oldUser.name;
    oldUser.email = newUserData?.email || oldUser.email;
    if (newUserData?.password !== null) {
      const hash = await bcrypt.hash(newUserData.password, 10);
      oldUser.password = hash;
    }
    oldUser.mobile = newUserData?.mobile || oldUser.mobile;

    oldUser.save();

    const token = jwt.sign(
      { name: oldUser.name, id: oldUser._id },
      "PRIVATE_KEY"
    );

    return res.status(200).json({
      token: token,
      message: "User updated successfully.",
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal Server Error. Please try again",
      success: false,
    });
  }
};
