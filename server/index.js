import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import { Server } from "socket.io";
import http from "http";

//Routes Imports
import adminRoutes from "./Routes/adminRoutes.js";
import borrowerRoutes from "./Routes/borrowerRoutes.js";
import lenderRoutes from "./Routes/lenderRoutes.js";
import userRoutes from "./Routes/userRoutes.js";

const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" }, pingTimeout: 60000 });

const PORT = process.env.PORT || 3002;
const MONGODB_CONNECT_URI =
  "mongodb+srv://gajju:gajju@cluster0.pzrazza.mongodb.net/?retryWrites=true&w=majority";

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static("files"));
app.use(express.urlencoded({ extended: true }));

const connectToDB = () => {
  mongoose
    .connect(MONGODB_CONNECT_URI)
    .then(() => console.log("MONGODB CONNECTED..."))
    .catch((err) => console.log(err));
};
connectToDB();

app.use("/api/admin", adminRoutes);
app.use("/api/borrower", borrowerRoutes);
app.use("/api/lender", lenderRoutes);
app.use("/api/user", userRoutes);

server.listen(PORT, () => {
  console.log(`Server is running on :: http://localhost:${PORT}`);
});
