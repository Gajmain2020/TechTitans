import "./index.css";
import Footer from "./components/Footer/Footer";
import MainBody from "./components/MainBody/MainBody";
import Navbar from "./components/Navbar/Navbar";
import Post from "./components/Post/Post";
import SignUp from "./components/SignUp/Signup";
import SideBar from "./components/SideBar/SideBar";
import Toolbar from '@mui/material/Toolbar';

function App() {
  return (
    <div className="flex">
      <SideBar />
      <div className=" flex flex-col mt-24 sm:w-full md:w-[50%] ">
        <Post name="Divyanshi Srivastava" date="12 dec" />
        <Post name="Divyanshi Srivastava" date="12 dec" />
        <Post name="Divyanshi Srivastava" date="12 dec" />
        <Post name="Divyanshi Srivastava" date="12 dec" />
        <Post name="Divyanshi Srivastava" date="12 dec" />
        <Post name="Divyanshi Srivastava" date="12 dec" />
        <Post name="Divyanshi Srivastava" date="12 dec" />
        <Post name="Divyanshi Srivastava" date="12 dec" />
      </div>

    </div>
  );
}

export default App;
