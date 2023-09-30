import { useState, useRef, useEffect } from "react";
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
import { useLocation } from "react-router-dom";
import { fetchSinglePost } from "../../Api/borrower";

function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

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
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}

function Post() {
  // const name = props.name;
  const [showCommentModal, SetShowCommentModal] = useState(false);
  const [open, setOpen] = useState(false);
  const [isDisable, setIsDisabled] = useState(true);
  const [reply, setReply] = useState("");
  const replyRef = useRef(null);

  const user =
    localStorage.getItem("data") && JSON.parse(localStorage.getItem("data"));

  function handleCommentButton() {
    SetShowCommentModal(true);
    setOpen(true);
  }
  function handleClose() {
    setOpen(false);
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log(replyRef.current.value);
  }

  function CommentModal() {
    return (
      <>
        <div className="p-2 flex-col bg-background rounded-2xl text-primary  h-auto pt-2 xsm:w-full md:w-[50%] flex gap-2">
          <div>
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </div>
          <div className="flex flex-col justify-start gap-2 px-2">
            <div className="h-full">
              <Avatar>{props.borrowerName}</Avatar>
            </div>
            <div className="flex flex-col w-full items-start  gap-2">
              <div className="flex justify-start gap-2">
                <p>{name}</p>
                <p>
                  {"."}
                  {props.createdAt}
                </p>
              </div>
              <div className="h-auto w-full flex flex-col">
                <p>Title:</p>
                <p>Amount:</p>
                <p className="">Desired Interest:</p>
              </div>
            </div>
            <div className="w-full text-borderLight border-b-2 h-1 mt-2"></div>
          </div>
          <div className="flex w-full flex-col gap-2">
            <Box component="form" onSubmit={handleSubmit} noValidate>
              <div className="flex justify-start gap-2 px-2">
                <div className="h-full">
                  {/* <Avatar {...stringAvatar(name)} /> */}
                </div>
                <div className="w-full">
                  <p>
                    Replying to {"@"}
                    {props.name}
                  </p>
                  <TextField
                    fullWidth
                    autoFocus
                    id="standard-multiline-static"
                    label="Write your reply here"
                    multiline
                    rows={4}
                    variant="standard"
                    inputRef={replyRef}
                    // onChange={handleChange}
                  />
                </div>
              </div>
              <div className="flex w-full justify-end">
                <Button
                  variant="contained"
                  color="success"
                  onClick={handleSubmit}
                >
                  Reply
                </Button>
              </div>
            </Box>
          </div>
        </div>
      </>
    );
  }

  return (
    <div className="w-full md:ml-20 flex">
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        // onClick={handleClose}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
      >
        {showCommentModal && <CommentModal />}
      </Backdrop>
      <div className="flex-col bg-background  hover:bg-background_posts_hover  h-auto pt-2 xsm:w-full flex gap-2">
        <div className="flex justify-start gap-2 px-2">
          <div className="h-full">
            <Avatar>{user.borrowerName}</Avatar>
          </div>
          <div className="flex flex-col w-full items-start  gap-2">
            <div className="flex justify-start gap-2">
              <p>{props.borrowerName}</p>
              <p>
                {"."}
                {props.createdAt}
              </p>
            </div>
            <div className="h-auto w-full flex flex-col">
              <p>Title:</p>
              <p>Amount:</p>
              <p className="">Desired Interest:</p>
            </div>
            <div className="flex w-full justify-end gap-2">
              {/* <IconButton aria-label="add to bookmark">
              <BookmarkBorderIcon />
              </IconButton> */}
              <IconButton
                onClick={handleCommentButton}
                aria-label="add a comment"
              >
                <CommentIcon />
              </IconButton>
            </div>
          </div>
        </div>
        <div className="w-full text-borderLight border-b-2 h-1 mt-2"></div>
      </div>
    </div>
  );
}
export default Post;

function PostOpened() {
  const name = props.name;
  const [showCommentModal, SetShowCommentModal] = useState(false);
  const [open, setOpen] = useState(false);
  const [isDisable, setIsDisabled] = useState(true);
  const [reply, setReply] = useState("");
  const replyRef = useRef(null);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const postId = useLocation().pathname.split("/")[2];

  useEffect(() => {
    fetchSinglePost(postId)
      .thne((res) => setPost(res.post))
      .catch((err) => alert(err));
  }, []);

  function handleCommentButton() {
    SetShowCommentModal(true);
    setOpen(true);
  }
  function handleClose() {
    setOpen(false);
  }
  function handleSubmit(e) {
    e.preventDefault();
  }
  function handleBookmark() {
    setIsBookmarked(!isBookmarked);
  }

  function handleChange() {
    console.log(`render ${replyRef.current.value}`);
    if (replyRef.current.value != null) {
      setIsDisabled(false);
    } else if (replyRef.current.value == null) {
      setIsDisabled(true);
    }
  }

  function CommentModal() {
    return (
      <>
        <div className="p-2 flex-col bg-background rounded-2xl text-primary  h-auto pt-2 xsm:w-full md:w-[50%] flex gap-2">
          <div>
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </div>
          <div className="flex flex-col justify-start gap-2 px-2">
            <div className="h-full">
              {/* <Avatar {...stringAvatar(name)} /> */}
            </div>
            <div className="flex flex-col w-full items-start  gap-2">
              <div className="flex justify-start gap-2">
                <p className="text-sm font-bold">{name}</p>
                <p>
                  {"."}
                  {props.date}
                </p>
              </div>
              <div className="h-auto w-full flex flex-col">
                <p>Title:</p>
                <p>Amount:</p>
                <p className="">Desired Interest:</p>
              </div>
            </div>
            <div className="w-full text-borderLight border-b-2 h-1 mt-2"></div>
          </div>
          <div className="flex w-full flex-col gap-2">
            <Box component="form" onSubmit={handleSubmit} noValidate>
              <div className="flex justify-start gap-2 px-2">
                <div className="h-full">
                  {/* <Avatar {...stringAvatar(name)} /> */}
                </div>
                <div className="w-full">
                  <p>
                    Replying to {"@"}
                    {props.name}
                  </p>
                  <TextField
                    fullWidth
                    autoFocus
                    id="standard-multiline-static"
                    label="Write your reply here"
                    multiline
                    rows={4}
                    variant="standard"
                    inputRef={replyRef}
                    // onChange={handleChange}
                  />
                </div>
              </div>
              <div className="flex w-full justify-end">
                <Button
                  variant="contained"
                  color="success"
                  onClick={handleSubmit}
                >
                  Comment
                </Button>
              </div>
            </Box>
          </div>
        </div>
      </>
    );
  }

  return (
    <div className="w-full md:ml-20 flex">
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        // onClick={handleClose}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
      >
        {showCommentModal && <CommentModal />}
      </Backdrop>
      <div className="w-full">
        <div className="flex-col bg-background   h-auto pt-2 xsm:w-full flex gap-2">
          <div className="flex justify-start gap-2 px-2">
            <div className="h-full">
              {/* <Avatar {...stringAvatar(name)} /> */}
            </div>
            <div className="flex flex-col w-full items-start  gap-2">
              <div className="flex justify-start gap-2">
                <p className="text-sm font-bold">{name}</p>
                <p>
                  {"."}
                  {props.date}
                </p>
              </div>
              <div className="h-auto w-full flex flex-col">
                <p>Title:</p>
                <p>Description:</p>
                <p>Amount:</p>
                <p className="">Desired Interest:</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full text-borderLight border-b-2 h-1 mr-2"></div>
        <div className="flex w-full justify-end gap-2 mr-2  bg-background  hover:bg-background_posts_hover ">
          <IconButton aria-label="add to bookmark" onClick={handleBookmark}>
            {isBookmarked ? <BookmarkIcon /> : <BookmarkBorderIcon />}
          </IconButton>
          <IconButton onClick={handleCommentButton} aria-label="add a comment">
            <CommentIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
}
export { PostOpened };
