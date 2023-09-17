import mongoose from "mongoose";

const reqString = { type: String, required: true };

const adminSchema = mongoose.Schema({
  name: reqString,
  email: { ...reqString, unique: true },
  password: reqString,
  createdAt: { type: Date, default: new Date() },
  updatedAt: { type: Date, default: new Date() },
});

export default mongoose.model("Admin", adminSchema);
