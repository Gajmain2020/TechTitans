import mongoose from "mongoose";

const reqString = { type: String, required: true };

const complaintSchema = mongoose.Schema({
  complainerName: reqString,
  complainerEmail: reqString,
  complaintTitle: reqString,
  complaintDescription: reqString,
  complaintDate: {
    type: Date,
    default: new Date(),
  },
});

export default mongoose.model("Complaint", complaintSchema);
