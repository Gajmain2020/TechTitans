import { useEffect, useState } from "react";
import SideBar from "./components/SideBar/SideBar";
import Timeline from "./components/Timeline/Timeline";
import PostDetails from "./PostDetails/PostDetails";
import { useLocation } from "react-router-dom";
import { addComment, fetchSinglePost } from "./Api/borrower";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";

const PostOpen = () => {
  const postId = useLocation().pathname.split("/")[2];
  const [postData, setPostData] = useState(null);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const user =
    localStorage.getItem("data") && JSON.parse(localStorage.getItem("data"));

  useEffect(() => {
    fetchSinglePost(postId).then((res) => {
      setPostData(res.post);
      setComments(res.post.comments);
    });
  }, []);

  function handleCommentChange(e) {
    setComment(() => e.target.value);
  }

  function handleAddComment() {
    setComments((perv) => [
      ...perv,
      { commenter: user.name, commenterId: user.id, comment },
    ]);

    addComment(comment, user.id, user.name)
      .then((res) => alert(res.message))
      .catch((err) => alert(err.message));
  }

  return (
    <div className="flex">
      <SideBar />

      <div className=" flex flex-col mt-20 xsm:w-full md:w-[50%] ">
        {postData && <PostDetails postData={postData} />}

        {/* DESIGN THIS */}
        <div className="mt-10">
          {postData && comments.length === 0 && <>no comments to display </>}
          {postData && comments.length !== 0 && (
            <>
              {comments.map((comment) => (
                <div key={comment.commenterId}>
                  {user.id === comment.commenterId
                    ? "me ::"
                    : `${comment.commenter} :: `}
                  {comment.comment}
                </div>
              ))}
            </>
          )}
        </div>
        <div className="mt-10">
          <TextField
            label="comment"
            value={comment}
            onChange={handleCommentChange}
          />
          <Button variant="contained" onClick={handleAddComment}>
            Comment
          </Button>
        </div>
      </div>

      <div className="mt-24">
        <Timeline />
      </div>
    </div>
  );
};

export default PostOpen;
