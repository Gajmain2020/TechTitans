import React from "react";
import "./index.css";
import Footer from "./components/Footer/Footer";
import Post from "./components/Post/Post";
import SideBar from "./components/SideBar/SideBar";
import Timeline from "./components/Timeline/Timeline";
import { Link } from "react-router-dom";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import MessageCard from "./components/MessageCard/MessageCard";
import { useState } from "react";
import { useRef } from "react";
import { useParams } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Search from "@mui/icons-material/Search";

const Message = () => {
  const messages = [
    {
      id: "1",
      msg: "Hello",
    },
    { id: "2", msg: "nice" },
    { id: "1", msg: "verynice" },
  ];

  const changeView1 = useRef(null);
  const changeView2 = useRef(null);

  const params = useParams();
  const { userid } = params;

  function handleClick() {
    changeView1.current.className =
      " flex flex-col md:h-full p-2 pt-24 md:w-[30%] gap-2  xsm:hidden sm:flex md:flex";
    changeView2.current.className = "w-full p-2 pt-24";
  }

  function handleBack() {
    changeView1.current.className =
      "flex flex-col h-full p-2 pt-24 xsm:w-full md:w-[30%] gap-2";
    changeView2.current.className =
      "w-full p-2 pt-24 xsm:hidden  sm:hidden md:flex ";
  }

  return (
    <div className="flex gap-2">
      <SideBar />
      <div
        className="flex flex-col h-full p-2 pt-24 xsm:w-full md:w-[30%] gap-2"
        ref={changeView1}
      >
        <div>
          <form>
            <label
              for="default-search"
              class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search Mockups, Logos..."
                required
              />
              <button
                type="submit"
                className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Search
              </button>
            </div>
          </form>
        </div>
        <div className="h-full">
          <Link to="/message/1234">
            <button className="w-full" onClick={handleClick}>
              <ProfileCard />
            </button>
          </Link>
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
        </div>
      </div>
      <div
        className="w-full p-2 pt-24 xsm:hidden  sm:hidden md:block "
        ref={changeView2}
      >
        {/* <MessageCard /> */}
        <div className=" w-full flex flex-col bg-background_posts_hover rounded-md">
          <div>
            {!userid ? (
              <>
                <Search />
                <p className="font-extrabold">Find people to message...</p>
              </>
            ) : (
              <div className="flex flex-col gap-2 w-full">
                <div className=" p-2 h-10 w-full gap-10 flex items-start">
                  <Link to="/message">
                    <button onClick={handleBack}>
                      <ArrowBackIcon />
                    </button>
                  </Link>
                  <p className="font-bold">Name</p>
                </div>
                <div className="h-full flex flex-col bg-background justify-end">
                  {messages.map((message) => (
                    <div className="w-full">
                      {message.id === "1" ? (
                        <p className="w-full justify-end flex">{message.msg}</p>
                      ) : (
                        <p className="w-full justify-start flex">
                          {message.msg}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
