import jwt from "jsonwebtoken";
import Borrower from "../Models/borrowing.js";
import User from "../Models/user.js";

export const postRequirement = async (req, res) => {
  try {
    const userToken = req.headers.cookie.split("=")[1];
    const userDecoded = jwt.decode(userToken);
    const postData = req.body;
    const published = await Borrower.findOne({
      amountRequired: postData.amount,
      borrowerId: userDecoded.id,
      borrowerName: userDecoded.name,
      borrowingTitle: postData.title,
      borrowingDescription: postData.description,
      interest: postData.interest,
      period: postData.period,
      open: true,
    });
    if (published) {
      return res.status(409).json({
        message:
          "Same request is already published. You can update / edit you post.",
        success: false,
      });
    }
    const user = await User.findById(userDecoded.id);
    const borrowing = await Borrower.create({
      amountRequired: postData.amount,
      borrowerId: userDecoded.id,
      borrowerName: userDecoded.name,
      borrowingTitle: postData.title,
      borrowingDescription: postData.description,
      interest: postData.interest,
      period: postData.period,
      open: true,
      comments: [],
    });
    user.borrowings = [
      ...user.borrowings,
      {
        borrowingId: borrowing._id,
        interest: borrowing.interest,
        amount: postData.amount,
        period: postData.period,
        open: true,
      },
    ];

    await user.save();

    return res
      .status(200)
      .json({ message: "Posted Successfully...", success: true });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal Server Error. Please try again",
      success: false,
    });
  }
};
