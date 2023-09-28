import React from 'react'

const NotifcationCard = () => {
  return (
    <div className='flex-col bg-background  hover:bg-background_posts_hover  h-auto pt-2 xsm:w-full flex gap-2 md:ml-20'>
              <div className="flex-col bg-background  hover:bg-background_posts_hover  h-auto pt-2 xsm:w-full flex gap-2">
              {/* <p>Notification</p> */}
        <div className="flex justify-start items-center gap-2 px-2">
          <div className="h-full">
            {/* <Avatar {...stringAvatar("Gitesh Sarvaiya")} /> */}
            hehe
          </div>
          <div className="flex flex-col w-full items-start  gap-2">
            <div className="flex justify-start gap-2">
              <p className='text-sm font-bold'>Notification</p>
            </div>
            <div className="h-auto w-full flex flex-col">
              <p>Notification</p>
              {/* <p>Amount:</p>
              <p className="">Desired Interest:</p> */}
            </div>
          </div>
        </div>
        <div className="w-full text-borderLight border-b-2 h-1 mt-2"></div>
      </div>
    </div>
  );
}

export default NotifcationCard