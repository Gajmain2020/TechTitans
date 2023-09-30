/* eslint-disable react/prop-types */
import "./index.css";
// import Footer from "./components/Footer/Footer";
import SideBar from "./components/SideBar/SideBar";
import Timeline from "./components/Timeline/Timeline";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchPost } from "./Api/user";
import { format } from "date-fns";
import { IconButton } from "@mui/material";
import CommentIcon from "@mui/icons-material/Comment";

export default function Content() {
  const [data, setData] = useState("");

  useEffect(() => {
    fetchPost().then((res) => setData(res.posts));
  }, []);

  return (
    <div className="flex">
      <SideBar />
      <div className=" flex flex-col mt-24 xsm:w-full md:w-[50%] ">
        {!data && <>Loading...</>}
        {data && data.length === 0 && (
          <> there is no post to show fot the time beging</>
        )}
        {data &&
          data.map((dt) => (
            <div key={dt._id}>
              <Link to={"/post/" + `${dt._id}`}>
                <SinglePost dt={dt} />
              </Link>
            </div>
          ))}
      </div>
      <div className=" mt-24">
        <Timeline />
      </div>
      <button className=" sm:hidden  bg-primary text-textdarkmode  fixed bottom-0 right-0 p-4 m-4 bg-blue-500 text-white rounded-full shadow-lg">
        Create Post
      </button>
    </div>
  );
}

function SinglePost({ dt }) {
  const navigate = useNavigate();
  function handleCommentButton() {
    console.log("hello", dt);
    navigate(`/post/${dt._id}`);
  }

  function handleBookmark() {
    console.log("data", dt);
  }

  return (
    <>
      <div className="w-full">
        <div className="flex-col bg-background   h-auto pt-2 xsm:w-full flex gap-2">
          <div className="flex justify-start gap-2 px-2">
            <div className="h-full">
              {/* <Avatar {...stringAvatar(name)} /> */}
            </div>
            <div className="flex flex-col w-full items-start  gap-2">
              <div className="h-auto w-full flex flex-col">
                <div>
                  <p>
                    Name:
                    <span className="text-xl text-text">
                      {" "}
                      {dt.borrowerName}
                    </span>
                  </p>
                  <p>
                    Title:
                    <span className="text-xl text-text"> {dt.title}</span>
                  </p>
                </div>

                <p>
                  Amount Required:
                  <span className="text-xl text-text">
                    {" "}
                    {dt.amountRequired}
                  </span>
                </p>
                <p>
                  Intererst
                  <span className="text-xl text-text"> {dt.interest}</span>
                </p>
                <p>
                  Period
                  <span className="text-xl text-text"> {dt.period}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full text-borderLight border-b-2 h-1 mr-2"></div>
        <div className="flex w-full justify-end gap-2 mr-2  bg-background  hover:bg-background_posts_hover ">
          <IconButton aria-label="add to bookmark" onClick={handleBookmark}>
            {/* {isBookmarked ? <BookmarkIcon /> : <BookmarkBorderIcon />} */}
          </IconButton>
          <IconButton onClick={handleCommentButton} aria-label="add a comment">
            <CommentIcon />
          </IconButton>
        </div>
      </div>
    </>
  );
}
