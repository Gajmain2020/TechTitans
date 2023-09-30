import "./Home.css";
import Lottie from "react-lottie";
import animationData from "../../assets/animation_ln4mcpbx.json";
import { Button } from "@mui/material";
import { useNavigate } from "react-router";
import NavBar from "../Navbar/Navbar";

function Homepage() {
  const navigate = useNavigate();
  const defaultOptions = {
    animationData,
    loop: true,
  };
  return (
    <>
      <NavBar />
      <div className="w-3/4 flex mx-auto homepage mt-8 flex-col lg:flex-row md:flex-row lg:gap-0 md:gap-0 gap-6 lg:mb-0 md:mb-0 mb-10 lg:p-2 md:p-2 px-4 py-8">
        <div className="lg:w-2/3 md:w-2/3 w-full border-2 rounded-lg">
          <div className="flex flex-col justify-center align-middle">
            <div className="text-xl font-bold font-main font-text mt-3 text-center">
              Credit Connect
            </div>
            <Lottie options={defaultOptions} />
            <div className="font-text text-textPrimary mt-3 mb-3 text-center">
              Are you ready to take control of your financial journey?
              <br />
              Look no further! Credit Connect is your trust platform.
              <br />
              We believe in the power of financial collaboration. Whether you
              are looking to borrow funds to pursue your dreams or willing to
              lend a helping hand to someone in need, out platform connects
              individuals like you in a secure and user-friendly environment.
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 md:w-1/3 w-full flex flex-col gap-4 justify-center my-auto lg:mx-8 md:mx-8 align-middle">
          <Button
            onClick={() => navigate("/signin")}
            variant="contained"
            fullWidth
          >
            Sign - in
          </Button>
          <Button
            onClick={() => navigate("/signup")}
            variant="outlined"
            color="secondary"
            fullWidth
          >
            Sign - up
          </Button>
          <hr />
          <span className="text-center">OR</span>
          <hr />
          <Button
            variant="outlined"
            color="secondary"
            fullWidth
            onClick={() => navigate("/login-faculty")}
          >
            Login Faculty
          </Button>
        </div>
      </div>
    </>
  );
}
export default Homepage;
