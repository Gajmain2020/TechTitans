import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

//Routes Imports
import adminRoutes from "./Routes/adminRoutes.js";
import borrowerRoutes from "./Routes/borrowerRoutes.js";
import lenderRoutes from "./Routes/lenderRoutes.js";
import userRoutes from "./Routes/userRoutes.js";

const app = express();
const PORT = process.env.PORT || 3002;
const MONGODB_CONNECT_URI =
  "mongodb+srv://gajju:gajju@cluster0.pzrazza.mongodb.net/?retryWrites=true&w=majority";

app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static("files"));
app.use(express.urlencoded({ extended: true }));

app.use("/api/admin", adminRoutes);
app.use("/api/borrower", borrowerRoutes);
app.use("/api/lender", lenderRoutes);
app.use("/api/user", userRoutes);

mongoose
  .connect(MONGODB_CONNECT_URI)
  .then(() =>
    app.listen(PORT, () => {
      console.log(`MongoDB Connected....`);
      console.log(`Server Running At :: http://localhost:${PORT}`);
    })
  )
  .catch((err) => console.log(err))
  .catch((err) => console.log(err.message));
