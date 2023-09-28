import React from 'react'
import {PostOpened} from './components/Post/Post'
import SideBar from "./components/SideBar/SideBar";
import Timeline from './components/Timeline/Timeline';
import Comments from './components/Comments/Comments';
import ReplyInput from './components/ReplyInput/ReplyInput';

const PostOpen = () => {
  return (
    <div className="flex">
    <SideBar />
    <div className=" flex flex-col mt-20 xsm:w-full md:w-[50%] ">
        <PostOpened repliedto="DevDeep Goyal" name="DevDeep Goyal" date="12 dec" />
        <ReplyInput repliedto="DevDeep Goyal" name="Gitesh Sarvaiya" />
        <Comments repliedto="DevDeep Goyal" name="Gitesh Sarvaiya" comment="Very Nice Post"/>
        </div>
        <div className="mt-24">
        <Timeline />
      </div>
    </div>
  )
}

export default PostOpen;