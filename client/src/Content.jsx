import "./index.css";
import Footer from "./components/Footer/Footer";
import MainBody from "./components/MainBody/MainBody";
import Navbar from "./components/Navbar/Navbar";
import Post from "./components/Post/Post";
import SignUp from "./components/SignUp/Signup";
import SideBar from "./components/SideBar/SideBar";
import Toolbar from '@mui/material/Toolbar';
import Timeline from "./components/Timeline/Timeline";

export default function Content() {
  return (
    <div className="flex">
      <SideBar />
      <div className=" flex flex-col mt-24 xsm:w-full md:w-[50%] ">
        <Post name="Divyanshi Srivastava" date="12 dec" />
        <Post name="Devdeep Goyal" date="12 dec" />
        <Post name="Divyanshi Srivastava" date="12 dec" />
        <Post name="Divyanshi Srivastava" date="12 dec" />
        <Post name="Divyanshi Srivastava" date="12 dec" />
        <Post name="Divyanshi Srivastava" date="12 dec" />
        <Post name="Divyanshi Srivastava" date="12 dec" />
        <Post name="Divyanshi Srivastava" date="12 dec" />
      </div>
      <div className=" mt-24">
        <Timeline />
      </div>
      <button class=" sm:hidden  bg-primary text-textdarkmode  fixed bottom-0 right-0 p-4 m-4 bg-blue-500 text-white rounded-full shadow-lg">
            Create Post
        </button>
    </div>
  );
}