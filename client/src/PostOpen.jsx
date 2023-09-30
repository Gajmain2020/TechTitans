import { useEffect, useState } from "react";
import SideBar from "./components/SideBar/SideBar";
import Timeline from "./components/Timeline/Timeline";
import PostDetails from "./PostDetails/PostDetails";
import { useLocation } from "react-router-dom";
import { addComment, fetchSinglePost } from "./Api/borrower";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import Avatar from "@mui/material/Avatar";

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

    addComment(comment, user.id, user.name, postData._id)
      .then((res) => alert(res.message))
      .catch((err) => alert(err.message));
  }

  return (
    <div className="flex">
      <SideBar />
 
      <div className=" flex flex-col mt-20 xsm:w-full md:w-[50%] ">
      <div className="flex-col gap-10 m-2 xsm:mx-2 p-1 border-l-2 border-r-2 border-t-2 border-b-2 border-icons rounded-t-xl">
        <div className="flex flex-col w-full h-auto gap-2">
          <div className="bg-postHeader font-bold p-2 rounded-lg text-background">Title</div>
          <div className="flex  gap-4">
            <div className="h-full w-auto">
              <Avatar>G</Avatar>
            </div>
            <div className="flex flex-col w-full">
              <div>Username</div>
              <div>Amount</div>
              <div>Interest</div>
              <div>Description</div>
            </div>
            </div>
          <div className='border-b-2 border-dashed border-icons'></div>
          <div className='flex flex-col'>
            <p>Replying to</p> 
          <div className="flex p-2">
              <div className="h-full">
                  <Avatar>T</Avatar>
              </div>
              <div className="w-full flex flex-col gap-2">
              <TextField
              fullWidth
          id="filled-multiline-static"
          label="Reply"
          multiline
          rows={2}
          variant="filled"
        />

              
          <div className="flex justify-end items-center"><button className="bg-postHeader p-2 rounded-lg text-background">Comment</button></div>
        </div>
        </div>
        </div>
      </div>
      </div>

{/* comments start here */}

<div className="flex flex-col w-full p-2 gap-2 rounded-lg">
    <div className="bg-postHeader rounded-lg p-2">
      <p>Comments</p>
    </div>
    {/* map from here */}
    <div className="flex gap-2">
        <div className="h-auto">
          <Avatar>S</Avatar>
        </div>
        <div className="w-full h-full flex items-center">
          comment
        </div>
    </div>
    <div className="flex justify-between items-center p-2">
      <div>
        date
      </div>
      <div>
        <button className="bg-secondary p-2 rounded-lg">Deal Done</button>
      </div>
    </div>
    <div className="border-t-2  border-icons"></div>
   
    {/* map ends here */}
</div>
       {/* {postData ? <PostDetails postData={postData} /> : <>Loading</>}

        DESIGN THIS
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
        </div>*/}
      </div> 

      <div className="mt-24">
        <Timeline />
      </div>
    </div>
  );
};

export default PostOpen;
