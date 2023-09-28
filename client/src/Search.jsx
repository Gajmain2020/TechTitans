import Footer from "./components/Footer/Footer";
import Post from "./components/Post/Post";
import {SideBarforSearch} from "./components/SideBar/SideBar";
import Timeline from "./components/Timeline/Timeline";
import {Link} from 'react-router-dom'
import ProfileCard from "./components/ProfileCard/ProfileCard"


export default function Search() {
  return (
    <div className="flex">
      <SideBarforSearch />
      <div className=" flex flex-col mt-24 xsm:w-full md:w-[50%]">
        <ProfileCard />
      </div>
      <div className=" mt-24">
        <Timeline />
      </div>
      <button class=" sm:hidden  bg-primary text-textdarkmode  fixed bottom-0 right-0 p-4 m-4 bg-blue-500 text-white rounded-full shadow-lg">
            Create Post
        </button>
    </div>
  );
}