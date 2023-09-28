import "./index.css";
// import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
// import Post from "./components/Post";
import SignUp from "./components/SignUp/SignUp";
import SignIn from "./components/SignIn/SignIn";
import { Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import Content from './Content';
import Profile from './Profile';
import PostOpen from "./PostOpen";
import Notifications from "./Notifications";
import Search from "./Search";

function App() {
  return (

    <>
      <Navbar />
      {/* <div className="container flex justify-center mb-10 mx-auto w-3/4 "> */}
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/content" element={<Content />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/post" element={<PostOpen />} />
          <Route path="/profile/:name" element={<Profile />} />
          <Route path="/post/:name" element={<PostOpen />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/search" element={<Search />} />

        </Routes>
      {/* </div> */}
    </>

  );
}

export default App;
