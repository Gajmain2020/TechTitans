import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useState } from "react";
import { useNavigate } from "react-router";

export default function SignIn() {
  const navigate = useNavigate();
  const [user, setUser] = useState({ name:"",email: "", title: "",description:"" });
  function handleSubmit(e) {
    e.preventDefault();
    console.log(user)
    // loginUser(user)
    //   .then((res) => {
    //     if (!res.success) {
    //       alert(res.message);
    //       return;
    //     }
    //     localStorage.setItem(
    //       "data",
    //       JSON.stringify({ authToken: res.token, name: res.name, id: res.id })
    //     );
    //     navigate(/content/${res.id});
    //   })
    //   .catch((err) => console.log(err));
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          {/* <LockOutlinedIcon /> */}
        </Avatar>
        <Typography component="h1" variant="h5">
            Complaint Form
        </Typography>
        <div className="flex flex-col w-full gap-4">
        <TextField
            required
            fullWidth
            label="Name"
            name="name"
            type="text"
            value={user.name}
            onChange={(e) =>
              setUser((user) => ({ ...user, name: e.target.value }))
            }
          />
        
          <TextField
            required
            fullWidth
            label="Email Address"
            name="email"
            type='text'
            value={user.email}
            onChange={(e) =>
              setUser((user) => ({ ...user, email: e.target.value }))
            }
          />
          <TextField
            required
            fullWidth
            name="title"
            label="Title"
            type="text"
            value={user.title}
            onChange={(e) =>
              setUser((user) => ({ ...user, title: e.target.value }))
            }
          />
          <TextField
            required
            fullWidth
            name="description"
            label="Description"
            type="text"
            value={user.description}
            onChange={(e) =>
              setUser((user) => ({ ...user, description: e.target.value }))
            }
          />
          <Button
            onClick={handleSubmit}
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >Submit
          </Button>
        </div>
      </Box>
    </Container>
  );
}