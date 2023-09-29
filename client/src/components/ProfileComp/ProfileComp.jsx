import React, { useState, useRef } from 'react'
import Avatar from '@mui/material/Avatar';
import { Link } from 'react-router-dom';
import Backdrop from "@mui/material/Backdrop";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import Box from "@mui/material/Box";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

// function stringToColor(string) {
//   let hash = 0;
//   let i;

//   /* eslint-disable no-bitwise */
//   for (i = 0; i < string.length; i += 1) {
//     hash = string.charCodeAt(i) + ((hash << 5) - hash);
//   }

//   let color = '#';

//   for (i = 0; i < 3; i += 1) {
//     const value = (hash >> (i * 8)) & 0xff;
//     color += `00${value.toString(16)}`.slice(-2);
//   }
//   /* eslint-enable no-bitwise */

//   return color;
// }

// function stringAvatar(name) {
//   return {
//     sx: {
//       bgcolor: stringToColor(name),
//     },
//     children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
//   };
// }



const ProfileComp = (props) => {

  const [showEditProfileModal, setShowEditProfileModal] = useState(false);
  const [open, setOpen] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const [isChecked, setIsChecked] = useState(false);
  const [formError, setFormError] = useState("")
  // const [email, setEmail]  = useState('hello')
  // const [isDisable, setIsDisabled] = useState(true);
  // const [reply, setReply] = useState("");
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const mobileRef = useRef(null);
  const errorRef = useRef(null);

  function checkboxClicked() {
    // Get the checkbox element by its ID
    let checkbox = document.getElementById("checkbox");
    // const { pan, aadhar, ...form1 } = formValues;
    // Check if the checkbox is checked
    if (checkbox.checked) {
      console.log(nameRef.current.value);
      console.log(emailRef.current.value);
      console.log(mobileRef.current.value);
      console.log(errorRef.current.className);
    } else {
      errorRef.current.className = "text-red";
    }
  }

  function handleClose() {
    setOpen(false);
  }
  
  function handleSubmit(e) {
    e.preventDefault();
    if(nameRef.current.value!=null && emailRef.current.value!=null && mobileRef.current.value!=null){
      checkboxClicked();
    } else {
      errorRef.current.ClassName = "text-red"
    }

  }

  function handleClick () {
    setShowEditProfileModal(true);
    setOpen(true);
  }


  function EditProfileModal() {
    return (
      <>
        <div className="p-2 flex-col bg-background rounded-2xl text-primary  h-auto pt-2 xsm:w-full md:w-[50%] flex gap-2">
          <div>
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </div>
          <div className="flex w-full flex-col gap-2">
            <Box component="form" onSubmit={handleSubmit} noValidate>
              <div className="flex justify-start gap-2 px-2">
                <div className="h-full">
                  {/* <Avatar {...stringAvatar(name)} /> */}
                </div>
                <div className="w-full">
                  <p className='text-center font-bold'>
                        Edit Your Profile
                  </p>
                    <TextField
              margin="normal"
              fullWidth
              label="Aadhar Number"
              type="text"
              disabled
              value="1234567891"
                  />
              <TextField
              margin="normal"
              fullWidth
              label="Pan Number"
              type="text"
              disabled
              value="1234567891"
            />
                  <TextField
              margin="normal"
              required
              fullWidth
              label="Name"
              type="text"
                    inputRef={nameRef}
                  />
                    <TextField
              margin="normal"
              required
              fullWidth
              label="Email Address"
              type="text"
              // value="Hello"
              // value={email}
              // onChange={(e)=> setEmail(e.target.value)}
                    inputRef={emailRef}
                  />
              <TextField
              margin="normal"
              required
              fullWidth
              label="Mobile Number"
              name="interest"
              type="text"
              inputRef={mobileRef}
            />
                </div>
              </div>
              <div className='flex w-full justify-center'>
              <FormControlLabel
                      control={
                        <Checkbox
                          value="I agree"
                          id="checkbox"
                          color="primary"
                          // onClick={checkboxClicked}
                          // defaultChecked={isChecked}
                        />
                      }
                      label="I agree to provide my Pan no. and Aadhar no."
                    />

              </div>
              <div className='flex w-full justify-center'>
                <p ref={errorRef} className='hidden'>Please enter the form correctly</p>
              </div>
              <div className="flex w-full justify-end">
                <Button
                  variant="contained"
                  color="success"
                  onClick={handleSubmit}
                  // disabled={isDisabled}
                >
                  Edit
                </Button>
              </div>
            </Box>
          </div>
        </div>
      </>
    );
  }





  return (
    <div className='flex flex-col md:ml-20 w-full justify-center gap-2 border p-2 items-center rounded-xl'>

      {/* <Avatar {...stringAvatar(props.name)} /> */}
      <div className='flex flex-col justify-center items-center'>
      <p>
        {props.name}
      </p>
      <p>
        gitesh.sarvaia28@gmail.com
      </p>
      <p>
        Total posts: 20
      </p>
      </div>
      <div className='flex w-full justify-center'>
        <button onClick={handleClick} className='bg-secondary p-2 rounded-xl mt-2 xsm:mb-4 md:mb-4'> Edit your Profile</button>
        <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        // onClick={handleClose}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
      >
        {showEditProfileModal && <EditProfileModal />}
      </Backdrop>
      </div>
    </div>
  )
}

export default ProfileComp