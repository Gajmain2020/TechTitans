import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';



// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function CreatePost() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <AccountBalanceIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Create Post
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>

            <TextField
              margin="normal"
              required
              fullWidth
              name="Title"
              label="Title"
              type="text"
              id="Title"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="Amount"
              label="Amount"
              name="Amount"
              autoFocus
              type='text'
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="Description"
              label="Description"
              name="Description"
              autoFocus
              rows={4}
              multiline
              type='text'
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="Desired Interest"
              label="Desired Interest"
              name="Desired Interest"
              autoFocus
              type='text'
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="Time Period"
              label="How long will you take it to return it ?"
              name="Time Period"
              autoFocus
              type='text'
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Create Post
            </Button>

          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}