import { useEffect, useState } from "react";
import SideBar from "./components/SideBar/SideBar";
import Timeline from "./components/Timeline/Timeline";
import { useLocation } from "react-router-dom";
import { addComment, fetchSinglePost } from "./Api/borrower";
import { TextField } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { format, parseISO } from "date-fns";

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
      .then((res) => {
        setComment("");
      })
      .catch((err) => alert(err.message));
  }

  return (
    <div className="flex">
      <SideBar />

      <div className=" flex flex-col mt-20 xsm:w-full md:w-[50%] ">
        <div className="flex-col gap-10 m-2 xsm:mx-2 p-1 border-l-2 border-r-2 border-t-2 border-b-2 border-icons rounded-t-xl">
          <div className="flex flex-col w-full h-auto gap-2">
            <div className="bg-postHeader font-bold p-2 rounded-lg text-background">
              {postData && postData.borrowingTitle}
            </div>
            <div className="flex  gap-4">
              <div className="h-full w-auto">
                <Avatar>
                  {postData && postData.borrowerName[0].toUpperCase()}
                </Avatar>
              </div>
              <div className="flex flex-col w-full">
                <div>
                  <b>{postData && postData.borrowerName}</b>
                </div>
                <div>
                  ₹ <b>{postData && postData.amountRequired}</b>
                </div>
                <div>
                  At <b>{postData && postData.interest}%</b>
                </div>
                <div>
                  For{" "}
                  <b>
                    {postData && postData.period === 1
                      ? `${postData && postData.period} Month`
                      : `${postData && postData.period} Months`}
                  </b>
                </div>
                <div>
                  Because of <b>{postData && postData.borrowingDescription}</b>
                </div>
              </div>
            </div>
            <div className="border-b-2 border-dashed border-icons"></div>
            <div className="flex flex-col">
              <p>Reply</p>
              <div className="flex p-2">
                <div className="h-full">
                  <Avatar>{user && user.name[0].toUpperCase()}</Avatar>
                </div>
                <div className="w-full flex flex-col gap-2">
                  <TextField
                    fullWidth
                    id="filled-multiline-static"
                    label="Reply"
                    multiline
                    rows={2}
                    onChange={handleCommentChange}
                    value={comment}
                    variant="filled"
                  />

                  <div className="flex justify-end items-center">
                    <button
                      onClick={handleAddComment}
                      className="bg-postHeader p-2 rounded-lg text-background"
                    >
                      Comment
                    </button>
                  </div>
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
          {comments.length === 0 && <>there is no comment To display.</>}
          {comments.map((cmt) => (
            <>
              <div className="flex gap-2">
                <div className="h-auto">
                  <Avatar>{cmt.commenter[0].toUpperCase()}</Avatar>
                </div>
                <div className="w-full h-full flex items-center">
                  {cmt.comment}
                </div>
              </div>
              <div className="flex justify-between items-center p-1">
                <div>
                  {format(new Date(parseISO(cmt.commentTime)), "dd-MM-yyyy")} -{" "}
                  {format(new Date(parseISO(cmt.commentTime)), "hh:MM")}
                </div>
                <div>
                  <button
                    onClick={() => alert("redirect to paymant gateway")}
                    className="bg-secondary p-1 rounded-lg"
                  >
                    Accept This Offer
                  </button>
                </div>
              </div>
              <div className="border-t-2  border-icons"></div>
            </>
          ))}
        </div>
      </div>

      <div className="mt-24">
        <Timeline />
      </div>
    </div>
  );
};

export default PostOpen;
