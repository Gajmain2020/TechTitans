import "./index.css";
// import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
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

function App() {
  return (
    <>
      {/* <Navbar /> */}
      {/* <div className="container flex justify-center mb-10 mx-auto w-3/4 "> */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/content/:id" element={<Content />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/post/:id" element={<PostOpen />} />
        <Route path="/profile/:name" element={<Profile />} />
        <Route path="/post/:name" element={<PostOpen />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/search" element={<Search />} />
        <Route path="/createpost" element={<CreatePost />} />
        <Route path="/message" element={<Message />} />
        <Route path="/message/:userid" element={<Message />} />
      </Routes>
      {/* </div> */}
    </>
  );
}

export default App;
