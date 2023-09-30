import React from 'react'
import Post from "./components/Post/Post";
import SideBar from "./components/SideBar/SideBar";
import Timeline from "./components/Timeline/Timeline";
import { Link } from "react-router-dom";

const Bookmarks = () => {
  return (
    <div className="flex">
    <SideBar />
    <div className=" flex flex-col mt-24 xsm:w-full md:w-[50%] ">
      <Link to="/post/Divyanshi Srivastava">
        <Post name="Divyanshi Srivastava" date="12 dec" />
      </Link>
      <Link to="/post/DevDeep Goyal">
        <Post name="Devdeep Goyal" date="12 dec" />
      </Link>
      <Post name="Divyanshi Srivastava" date="12 dec" />
      <Post name="Divyanshi Srivastava" date="12 dec" />
      <Post name="Divyanshi Srivastava" date="12 dec" />
      <Post name="Divyanshi Srivastava" date="12 dec" />
      <Post name="Divyanshi Srivastava" date="12 dec" />
      <Post name="Divyanshi Srivastava" date="12 dec" />
    </div>
    <div className=" mt-24">
        <p className='font-bold text-2xl text-center xsm:hidden md:block' >Total Bookmarks</p>
      </div>
    <button className=" sm:hidden  bg-primary text-textdarkmode  fixed bottom-0 right-0 p-4 m-4 bg-blue-500 text-white rounded-full shadow-lg">
      Create Post
    </button>
  </div>
  )
}

export default Bookmarks