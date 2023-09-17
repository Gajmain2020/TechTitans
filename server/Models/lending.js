import mongoose from "mongoose";

const lendingSchema = mongoose.Schema({
  amountGiven: String,
  lenderId: String,
  lenderName: String,
  lendingTitle: String,
  lendingDescription: String,
  interest: String,
  period: String,
  lendedDate: { type: Date },
  updatedAt: { type: Date, default: new Date() },
});

export default mongoose.model("Lending", lendingSchema);
