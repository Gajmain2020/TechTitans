import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";

export default function SignupFaculty() {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("factData")) {
      navigate("/faculty/" + JSON.parse(localStorage.getItem("factData")).id);
    }
  }, []);
  const [user, setUser] = useState({ email: "", password: "" });
  async function handleSubmit(e) {
    e.preventDefault();
    const response = await axios({
      url: "http://localhost:3002/api/user/login-faculty",
      method: "POST",
      data: user,
    });
    if (!response.data.success) {
      alert(response.data.message);
      return;
    }
    localStorage.setItem(
      "factData",
      JSON.stringify({ name: response.data.name, id: response.data.id })
    );
    navigate("/faculty/" + response.data.id);
  }

  return (
    <div
      className="flex h-screen justify-center items-center "
      style={{ backgroundColor: "#DBCDBA" }}
    >
      <div className="p-10 rounded-2xl " style={{ backgroundColor: "#BBB2A6" }}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            {/* <LockOutlinedIcon /> */}
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign In Faculty
          </Typography>
          <div className="flex flex-col w-full gap-4">
            <TextField
              required
              fullWidth
              label="Email Address"
              name="email"
              value={user.email}
              onChange={(e) =>
                setUser((user) => ({ ...user, email: e.target.value }))
              }
            />
            <TextField
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              value={user.password}
              onChange={(e) =>
                setUser((user) => ({ ...user, password: e.target.value }))
              }
            />
            <Button
              onClick={handleSubmit}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In Faculty
            </Button>
          </div>
        </Box>
      </div>
      {/* </Container> */}
    </div>
  );
}
