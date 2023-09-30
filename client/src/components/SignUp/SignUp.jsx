import { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { signUpUser } from "../../Api/user";

export default function SignUp() {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("data")) {
      console.log("hello");
      navigate("/content/" + JSON.parse(localStorage.getItem("data")).id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const InitialValuesofForm = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    mobile: "",
    reffral: "",
    urn: "",
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
    urn: "",
    reffral: "",
  };

  const [formValues, setFormValues] = useState(InitialValuesofForm);
  const [formErrors, setFromErrors] = useState(InitialFormErrors);
  const [warning, setWarning] = useState("");

  // eslint-disable-next-line no-unused-vars
  const handleClick = (e) => {
    if (
      !formErrors.nameErr.status &&
      !formErrors.emailErr.status &&
      !formErrors.passwordErr.status &&
      !formErrors.confirmPasswordErr.status &&
      !formErrors.mobileErr.status
    ) {
      setWarning("Please fill the form correctly!");
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

  const handleSubmit = (e) => {
    e.preventDefault();
    signUpUser(formValues)
      .then((res) => {
        if (res.success === false) {
          alert(res.message);
          return;
        }
        navigate(`/pending`);
      })
      .catch((err) => console.log(err));
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

  function handleUrnChange(e) {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  }
  function handleRefferalChange(e) {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <div
      className="flex flex-col justify-center items-center  w-full"
      style={{ backgroundColor: "#DBCDBA" }}
    >
      <div
        className=" flex flex-col justify-center items-center md:w-[50%] md:rounded-2xl p-4 "
        style={{ backgroundColor: "#BBB2A6" }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}></Avatar>

        <Typography
          component="h1"
          variant="h5"
          style={{ backgroundColor: "#BBB2A6" }}
        >
          Sign Up
        </Typography>

        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{ mt: 3 }}
          style={{ backgroundColor: "#BBB2A6" }}
        >
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
                  type="number"
                  value={formValues.mobile}
                  onChange={handleChangeMobile}
                  onBlur={handleBlurMobile}
                  error={formErrors.mobileErr.status}
                  helperText={formErrors.mobileErr.value}
                />
                {/* <p className="text-red-900">{formErrors.mobile}</p> */}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="urn"
                  label="University Roll Number"
                  type="number"
                  value={formValues.urn}
                  onChange={handleUrnChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="reffral"
                  label="Reffral Number"
                  type="number"
                  value={formValues.reffral}
                  onChange={handleRefferalChange}
                />
              </Grid>
              <Grid item xs={12}></Grid>
            </Grid>
            <Grid container justifyContent="center" spacing={2}>
              <Grid item>
                <p className="text-red-900">{warning}</p>
              </Grid>
            </Grid>
          </>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
        </Box>
      </div>
    </div>
  );
}
