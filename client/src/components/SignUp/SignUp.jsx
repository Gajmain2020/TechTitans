import * as React from 'react';
import { useState, useEffect } from "react"
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

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="#">
        BorrowEase 
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme

const defaultTheme = createTheme();

export default function SignUp() {

  function handleBack(){
    setForm(form-1);
    setIsChecked(true)

  }

   const InitialValuesofForm = {
      name:"",
      email:"",
      password:"",
      confirmPassword:"",
      mobile:"",
      pan:"",
      aadhar:"", 
    }

  const [form, setForm] = useState(0);
  const [formValues, setFormValues] = useState(InitialValuesofForm)
  const [isDisabled, setIsDisabled] = useState(true)
  const [isChecked, setIsChecked] = useState(false)
  const [formErrors, setFromErrors] = useState({})


  const handleClick = (e) => {
    setFromErrors(()=>validate(formValues));
    if(formErrors.length==null){
      setForm(form+1)
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({...formValues, [name]: value });
  }

  function validate(values) {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if(!values.name) {
      errors.name = "Username is required!"
    }
    if(!values.email) {
      errors.email = "Email is required!"
    } else if(!regex.test(values.email)){
      errors.email = "Email should be in valid format!"
    }
    if(!values.mobile) {
      errors.mobile = "Mobile Number is required!"
    } else if(values.mobile.length!=10){
      errors.mobile = "Please enter a valid mobile number!"
    }
    if(!values.password) {
      errors.password = "Password is required!"
    }
    if(!values.confirmPassword) {
      errors.confirmPassword = "Password re-enter the password here!"
    } else if (values.password!=values.confirmPassword){
      errors.confirmPassword = "Password did not match!";
    }
    return errors;

  }

  function checkboxClicked() {
    // Get the checkbox element by its ID
    let checkbox = document.getElementById("checkbox");

    // Check if the checkbox is checked
    if (checkbox.checked ) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
}

const handleSubmit = (e) => {
  e.preventDefault();
  console.log(formValues);
} 
  
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          
          {/* form for name email password and mobile no. */}
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 3 }}>
          {form == 0 && (
            <>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    autoComplete="given-name"
                    name="name"
                    required
                    fullWidth
                    id="name"
                    label="Name"
                    autoFocus
                    type="text"
                    value={formValues.name}
                    onChange={handleChange}
                  />
                  <p className="text-red-900">{formErrors.name}</p>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    value={formValues.email}
                    onChange={handleChange}
                  />
                  <p className="text-red-900">{formErrors.email}</p>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    value={formValues.password}
                    onChange={handleChange}
                  />
                  <p className="text-red-900">{formErrors.password}</p>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="confirmPassword"
                    label="Confirm Password"
                    type="password"
                    id="confirmPassword"
                    value={formValues.confirmPassword}
                    onChange={handleChange}
                  />
                  <p className="text-red-900">{formErrors.confirmPassword}</p>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="mobile"
                    label="Mobile Number"
                    type="text"
                    id="mobileNo"
                    value={formValues.mobile}
                    onChange={handleChange}
                  />
                  <p className="text-red-900">{formErrors.mobile}</p>
                </Grid>
                <Grid item xs={12}></Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        value="I agree"
                        id="checkbox"
                        color="primary"
                        onClick={checkboxClicked}
                        defaultChecked={isChecked}
                      />
                    }
                    label="I agree to provide my Pan no. and Aadhar no."
                  />
                </Grid>
              </Grid>
              <Button
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={handleClick}
                disabled={isDisabled}
              >
                Next →
              </Button>
            </>
          )}

          {/* form for pan no. and aadhar no. */}

          {form == 1 && (
            <>
              <Container maxWidth="xs">
                <Button onClick={handleBack}>← Back</Button>
              </Container>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="pan"
                    label="Pan Number"
                    type="text"
                    id="pan"
                    value={formValues.pan}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="aadhar"
                    label="Aadhar Number"
                    type="number"
                    id="aadhar"
                    value={formValues.aadhar}
                    onChange={handleChange}
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>

              </>
            
          )}
          <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="#" variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}