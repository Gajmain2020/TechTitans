import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Homepage() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="text-2xl flex flex-col gap-4 w-full">
        This will be homepage
        <Button variant="contained" onClick={() => navigate("/signin")}>
          Login
        </Button>
        <Button
          variant="outlined"
          color="warning"
          onClick={() => navigate("/signup")}
        >
          Signup
        </Button>
      </div>
    </div>
  );
}

export default Homepage;
