import * as React from "react";
import { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="#">
        BorrowEase
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme

const defaultTheme = createTheme();

export default function SignUp() {
  function handleBack() {
    setForm(form - 1);
    setIsChecked(true);
  }

  const InitialValuesofForm = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    mobile: "",
    pan: "",
    aadhar: "",
  };

  const InitialFormErrors = {
    nameErr: {
      status: false,
      value: "",
    },
    emailErr: {
      status: false,
      value: "",
    },
    passwordErr: { status: false, value: "" },
    confirmPasswordErr: { status: false, value: "" },
    mobileErr: { status: false, value: "" },
    panErr: { status: false, value: "" },
    aadharErr: { status: false, value: "" },
  };

  const [form, setForm] = useState(0);
  const [formValues, setFormValues] = useState(InitialValuesofForm);
  const [isDisabled, setIsDisabled] = useState(true);
  const [isChecked, setIsChecked] = useState(false);
  const [formErrors, setFromErrors] = useState(InitialFormErrors);

  const handleClick = (e) => {
    if (
      isChecked &&
      !formErrors.nameErr.status &&
      !formErrors.emailErr.status &&
      !formErrors.passwordErr.status &&
      !formErrors.confirmPasswordErr.status &&
      !formErrors.mobileErr.status
    ) {
      setForm(1);
    } else {
      alert("Please fill the form correctly!");
    }
  };

  const handleChangeName = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    handleBlurName();
  };

  const handleChangeEmail = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    handleBlurEmail();
  };

  const handleChangePassword = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleChangeConfirmPassword = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleChangeMobile = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  function checkboxClicked() {
    // Get the checkbox element by its ID
    let checkbox = document.getElementById("checkbox");
    const { pan, aadhar, ...form1 } = formValues;
    // Check if the checkbox is checked
    if (
      checkbox.checked &&
      !formErrors.nameErr.status &&
      !formErrors.emailErr.status &&
      !formErrors.passwordErr.status &&
      !formErrors.confirmPasswordErr.status &&
      !formErrors.mobileErr.status
    ) {
      setIsChecked(true);
      setIsDisabled(false);
    } else {
      setIsChecked(false);
      setIsDisabled(true);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
  };

  function handleBlurName() {
    if (formValues.name == "") {
      setFromErrors({
        ...formErrors,
        nameErr: { status: true, value: "Name is required" },
      });
    } else {
      setFromErrors({ ...formErrors, nameErr: { status: false, value: "" } });
    }
  }
  function handleBlurEmail() {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (formValues.email == "") {
      setFromErrors({
        ...formErrors,
        emailErr: { status: true, value: "Email Is Required" },
      });
    } else if (!regex.test(formValues.email)) {
      setFromErrors({
        ...formErrors,
        emailErr: { status: true, value: "Email should be in valid format" },
      });
    } else {
      setFromErrors({ ...formErrors, emailErr: { status: false, value: "" } });
    }
  }
  function handleBlurMobile() {
    if (formValues.mobile == "") {
      setFromErrors({
        ...formErrors,
        mobileErr: { status: true, value: "Mobile No. is Required" },
      });
    } else if (formValues.mobile.length < 10 || formValues.mobile.length > 10) {
      setFromErrors({
        ...formErrors,
        mobileErr: { status: true, value: "Please enter a valid mobile no." },
      });
    } else {
      setFromErrors({ ...formErrors, mobileErr: { status: false, value: "" } });
    }
  }
  function handleBlurPassword() {
    if (formValues.password == "") {
      setFromErrors({
        ...formErrors,
        passwordErr: { status: true, value: "Password Is Required" },
      });
    } else if (
      formValues.confirmPassword &&
      formValues.password !== formValues.confirmPassword
    ) {
      setFromErrors({
        ...formErrors,
        passwordErr: { status: true, value: "Password did not match" },
      });
    } else {
      setFromErrors({
        ...formErrors,
        passwordErr: { status: false, value: "" },
      });
    }
  }
  function handleBlurConfirmPassword() {
    if (formValues.confirmPassword == "") {
      setFromErrors({
        ...formErrors,
        confirmPasswordErr: { status: true, value: "Password is required" },
      });
    } else if (
      formValues.password &&
      formValues.password !== formValues.confirmPassword
    ) {
      setFromErrors({
        ...formErrors,
        confirmPasswordErr: { status: true, value: "Password did not match!" },
      });
    } else {
      setFromErrors({
        ...formErrors,
        confirmPasswordErr: { stats: false, value: "" },
      });
    }
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
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 3 }}
          >
            {form == 0 && (
              <>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      name="name"
                      required
                      fullWidth
                      id="name"
                      label="Name"
                      autoFocus
                      type="text"
                      value={formValues.name}
                      onChange={handleChangeName}
                      onBlur={handleBlurName}
                      error={formErrors.nameErr.status}
                      helperText={formErrors.nameErr.value}
                    />
                    {/* <p className="text-red-900">{formErrors.nameErr.}</p> */}
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      value={formValues.email}
                      onChange={handleChangeEmail}
                      onBlur={handleBlurEmail}
                      error={formErrors.emailErr.status}
                      helperText={formErrors.emailErr.value}
                    />
                    {/* <p className="text-red-900">{formErrors.email}</p> */}
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
                      onChange={handleChangePassword}
                      onBlur={handleBlurPassword}
                      error={formErrors.passwordErr.status}
                      helperText={formErrors.passwordErr.value}
                    />
                    {/* <p className="text-red-900">{formErrors.password}</p> */}
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
                      onChange={handleChangeConfirmPassword}
                      onBlur={handleBlurConfirmPassword}
                      error={formErrors.confirmPasswordErr.status}
                      helperText={formErrors.confirmPasswordErr.value}
                    />
                    {/* <p className="text-red-900">{formErrors.confirmPassword}</p> */}
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
                      onChange={handleChangeMobile}
                      onBlur={handleBlurMobile}
                      error={formErrors.mobileErr.status}
                      helperText={formErrors.mobileErr.value}
                    />
                    {/* <p className="text-red-900">{formErrors.mobile}</p> */}
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
                      // onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="aadhar"
                      label="Aadhar Number"
                      type="text"
                      id="aadhar"
                      value={formValues.aadhar}
                      // onChange={handleChange}
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
