import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static("files"));
app.use(express.urlencoded({ extended: true }));

mongoose.set("strictQuery", true);

mongoose
  .connect("mongodb://localhost:27017/opinhacks")
  .then(() =>
    app.listen(PORT, () => {
      console.log(`We are good to go....`);
      console.log(`Server Running At :: http://localhost:${PORT}`);
    })
  )
  .catch((err) => console.log(err.message));
