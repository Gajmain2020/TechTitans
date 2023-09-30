import React from "react";
import Post from "./components/Post/Post";
import SideBar from "./components/SideBar/SideBar";
import { ActivityTimeline } from "./components/Timeline/Timeline";
import { Link } from "react-router-dom";

const Activity = () => {
  return (
    <div className="flex">
      <SideBar />
      <div className=" flex flex-col mt-24 xsm:w-full md:w-[50%] ">
        <ActivityTimeline />
      </div>
      <button className=" sm:hidden  bg-primary text-textdarkmode  fixed bottom-0 right-0 p-4 m-4 bg-blue-500 text-white rounded-full shadow-lg">
        Create Post
      </button>
    </div>
  );
};

export default Activity;
