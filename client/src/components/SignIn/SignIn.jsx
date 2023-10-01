import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from "@mui/material/Typography";

import { loginUser } from "../../Api/user";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export default function SignIn() {
  const navigate = useNavigate();

  const [user, setUser] = useState({ email: "", password: "" });

  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      navigate("/");
    }
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    loginUser(user)
      .then((res) => {
        if (!res.success) {
          alert(res.message);
          return;
        }
        localStorage.setItem(
          "data",
          JSON.stringify({ authToken: res.token, name: res.name, id: res.id })
        );
        navigate(`/content/${res.id}`);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div
      className="flex h-screen justify-center items-center "
      style={{ backgroundColor: "#DBCDBA" }}
    >
      {/* <Container component="main" maxWidth="xs"   style={{ backgroundColor: "#BBB2A6", padding:"20px 20px 20px 20px ", }}> */}
      <div className="p-10 rounded-2xl" style={{ backgroundColor: "#BBB2A6" }}>
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
            Sign in
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
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <Link href="/signup">{"Don't have an account? Sign Up"}</Link>
              </Grid>
            </Grid>
          </div>
        </Box>
      </div>
      {/* </Container> */}
    </div>
  );
}
