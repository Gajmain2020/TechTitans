import React from 'react'
import NotifcationCard from './components/NotificationCard/NotificationCard'
import SideBar from "./components/SideBar/SideBar"
import Timeline  from './components/Timeline/Timeline'
import NotificationsIcon from '@mui/icons-material/Notifications';

const Notifications = () => {
  return (
    <div className="flex">
    <SideBar />
    <div className=" flex flex-col mt-24 xsm:w-full md:w-[50%] justify-center align-middle">
    <div className='text-center'>
        <p className='font-bold text-3xl md:ml-20'><NotificationsIcon /> {" "}Notifications</p>
        <div className="w-full text-borderLight border-b-2 h-1 mt-2"></div>
      </div>
        <NotifcationCard />

    </div>
    <div className="mt-24">
      <Timeline />
    </div>
    <button class=" sm:hidden  bg-primary text-textdarkmode  fixed bottom-0 right-0 p-4 m-4 bg-blue-500 text-white rounded-full shadow-lg">
          Create Post
      </button>
  </div>
  )
}

export default Notifications