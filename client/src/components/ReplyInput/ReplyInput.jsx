import React, { useState, useRef } from "react";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import CommentIcon from "@mui/icons-material/Comment";
import Backdrop from "@mui/material/Backdrop";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import Box from "@mui/material/Box";


function stringToColor(string) {
    let hash = 0;
    let i;
  
    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }
  
    let color = '#';
  
    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */
  
    return color;
  }
  
  function stringAvatar(name) {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
  }


const ReplyInput = (props) => {

    const replyRef = useRef(null);

    function handleSubmit(e) {
        e.preventDefault();
        console.log(replyRef.current.value);
      }
  return (  
    <div className='flex-col bg-background  hover:bg-background_posts_hover  h-auto pt-2 xsm:w-full flex gap-2 md:ml-20'>
            <div className="flex-col bg-background  hover:bg-background_posts_hover  h-auto pt-2 xsm:w-full flex gap-2">
            <div className="flex w-full flex-col gap-2">
            <div className="w-full text-borderLight border-b-2 h-1 mt-2"></div>
              <Box component="form" onSubmit={handleSubmit} noValidate>
                <div className="flex justify-start gap-2 px-2">
                  <div className="h-full">
                    <Avatar {...stringAvatar(props.name)} />
                  </div>
                  <div className="w-full">
                    <p>
                      Replying to {"@"}
                      {props.repliedto}
                    </p>
                    <TextField
                      fullWidth
                      autoFocus
                      id="standard-multiline-static"
                      label="Write your reply here"
                      multiline
                      rows={2}
                      variant="standard"
                      inputRef={replyRef}
                      // onChange={handleChange}
                    />
                  </div>
                </div>
  
              </Box>
              <div className="flex w-full justify-end">
                <div className="flex mr-2">
                  <Button
                    variant="contained"
                    color="success"
                    onClick={handleSubmit}
                  >
                    Reply
                  </Button>
                  </div>
                </div>
                <div className="w-full text-borderLight border-b-2 h-1"></div>
            </div>
            </div>
            </div>
  )
}

export default ReplyInput