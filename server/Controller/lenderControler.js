import { isValidObjectId } from "mongoose";
import Borrowings from "../Models/borrowing.js";

export const showInterest = async (req, res) => {
  try {
    //check if the given parameter is a valid mongodb object id
    const { postId } = isValidObjectId(req.params.postId);
    //* decode the jwt token over here and use its id and name to set in interested users...

    if (!postId) {
      return res
        .status(406)
        .json({ message: "Invalid Post ID.", success: false });
    }

    const post = await Borrowings.findById(postId);

    post.intersted = [{}, ...post.interested];
    await post.save();
    return res
      .status(200)
      .json({
        message: "Successfully added your interest in the post.",
        success: true,
      });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong. Please try again.",
      success: false,
    });
  }
};
