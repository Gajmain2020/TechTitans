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

    const InitialFormData ={
        title:"",
        amount:"",
        description:"",
        interest:"",
        period:"",
    }

    const [formdata, setFormdata] = React.useState(InitialFormData);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormdata({...formdata, [name]: value })
    }


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formdata);
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
              name="title"
              label="Title"
              type="text"
              id="title"
              value={formdata.title}
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="amount"
              label="amount"
              name="amount"
              autoFocus
              type='text'
              value={formdata.amount}
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="Description"
              label="Description"
              name="description"
              autoFocus
              rows={4}
              multiline
              type='text'
              value={formdata.description}
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="Desired Interest"
              label="Desired Interest"
              name="interest"
              autoFocus
              type='text'
              value={formdata.interest}
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="Time Period"
              label="How long will you take it to return it ?"
              name="period"
              autoFocus
              type='text'
              value={formdata.period}
              onChange={handleChange}
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