import mongoose from "mongoose";

const reqString = { type: String, required: true };

const userSchema = mongoose.Schema({
  name: reqString,
  email: { ...reqString, unique: true },
  password: reqString,
  mobile: reqString,
  proofs: {
    pan: reqString,
    aadhar: reqString,
  },
  borrowings: [
    {
      borrowingId: String,
      lenderId: String,
      lenderName: String,
      borrowingDate: { type: Date, default: new Date() },
      interest: String,
      amount: String,
      period: String,
      open: Boolean,
    },
  ],
  lendings: [
    {
      lendingId: String,
      borrowerId: String,
      borrowerName: String,
      lendingDate: { type: Date, default: new Date() },
      interest: String,
      amount: String,
      period: String,
    },
  ],
  createdAt: { type: Date, default: new Date() },
  updatedAt: { type: Date, default: new Date() },
});

export default mongoose.model("User", userSchema);
