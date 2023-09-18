import jwt from "jsonwebtoken";
import Borrower from "../Models/borrowing.js";
import User from "../Models/user.js";
import { isValidObjectId } from "mongoose";

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
    return res.status(500).json({
      message: "Internal Server Error. Please try again",
      success: false,
    });
  }
};

// ! to get only 20 posts will be sent to a
export const fetchPostsInitially = async (req, res) => {
  try {
    if (req.query.page !== undefined) {
      const pageNo = req.query.page;
      const posts = await Borrower.find()
        .skip(pageNo * 20)
        .limit(20);
      return res.status(200).json({
        posts,
        message:
          posts.length === 0 ? "No More Post To Display" : "Posts Received",
        success: true,
      });
    }
    const posts = await Borrower.find().limit(20);
    return res.status(200).json({
      posts,
      message: "Posts Received",
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error. Please try again",
      success: false,
    });
  }
};

export const postComment = async (req, res) => {
  try {
    const postId = isValidObjectId(req.query.postId);

    if (!postId) {
      return res
        .status(406)
        .json({ message: "Invalid Post Id.", success: false });
    }

    const post = await Borrower.findById(req.query.postId);

    if (!post) {
      return res
        .status(404)
        .json({ message: "Post Not Found...", success: false });
    }
    const { comment } = req.body;

    const user = jwt.decode(req.headers.cookie.split("=")[1]);

    post.comments = [
      ...post.comments,
      {
        commenter: user.name,
        commenterId: user.id,
        comment,
      },
    ];
    await post.save();
    return res
      .status(200)
      .json({ message: "Comment Posted Successfully...", success: true });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal Server Error. Please try again",
      success: false,
    });
  }
};
