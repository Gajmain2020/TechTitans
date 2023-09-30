import mongoose from "mongoose";

const facultySchema = mongoose.Schema({
  name: String,
  email: String,
  password: String,
  reffral: String,
  requests: [
    {
      studentName: String,
      studentEmail: String,
      studentMobile: String,
      studentUrn: String,
    },
  ],
});

export default mongoose.model("faculty", facultySchema);
