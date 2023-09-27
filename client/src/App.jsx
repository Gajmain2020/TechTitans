import "./index.css";
// import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
// import Post from "./components/Post";
import SignUp from "./components/Signup/Signup";
import SignIn from "./components/SignIn/SignIn";
import { Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";

function App() {
  return (
    <>
      <Navbar />
      <div className="container flex justify-center mb-10 mx-auto w-3/4 ">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
