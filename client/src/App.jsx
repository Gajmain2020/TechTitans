import "./index.css";
import "./App.css";
// import Footer from "./components/Footer/Footer";
// import Post from "./components/Post";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/Signup";
import { Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import Content from "./Content";
import Profile from "./Profile";
import PostOpen from "./PostOpen";
import Notifications from "./Notifications";
import Search from "./Search";
import CreatePost from "./components/CreatePost/CreatePost";
import Message from "./Message";
import Activity from "./Activity";
import Bookmarks from "./Bookmarks";
import PendingApproval from "./components/Pending/PendingApproval";
import SigninFaculty from "./components/Faculty/SignupFaculty";

import AboutUs from "./components/Pages/AboutUs";
import ContactUs from "./components/Pages/ContactUs";

import Complaint from "./components/Complaint/Complaint";
import HomepageFaculty from "./components/Faculty/HomepageFaculty";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      {/* <div className="container flex justify-center mb-10 mx-auto w-3/4 "> */}

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/pending" element={<PendingApproval />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/login-faculty" element={<SigninFaculty />} />
        <Route path="/faculty/:id" element={<HomepageFaculty />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/content/:id" element={<Content />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/post/:id" element={<PostOpen />} />
        <Route path="/profile/:name" element={<Profile />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/search" element={<Search />} />
        <Route path="/createpost/:id" element={<CreatePost />} />
        <Route path="/message" element={<Message />} />
        <Route path="/message/:userid" element={<Message />} />
        <Route path="activity/:userid" element={<Activity />} />
        <Route path="/bookmarks/:userid" element={<Bookmarks />} />
        <Route path="/complaint" element={<Complaint />} />
      </Routes>

      {/* </div> */}
    </>
  );
}

export default App;
