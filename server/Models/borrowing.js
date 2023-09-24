import mongoose from "mongoose";

const borrowingSchema = mongoose.Schema({
  amountRequired: String,
  borrowerId: String,
  borrowerName: String,
  borrowingTitle: String,
  borrowingDescription: String,
  interest: String,
  period: String,
  open: { type: Boolean, default: true },
  comments: [
    {
      commenter: String,
      commenterId: String,
      comment: String,
      commentTime: { type: Date, default: new Date() },
    },
  ],
  borrowedDate: { type: Date },
  createdAt: { type: Date, default: new Date() },
  updatedAt: { type: Date, default: new Date() },
});

export default mongoose.model("Borrowing", borrowingSchema);
