// const drawerWidth = 200;

import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Timeline = () => {
  return <></>;
};

const ActivityTimeline = () => {
  const id = useLocation().pathname.split("/")[2];

  const [activities, setActivities] = useState([]);

  useEffect(() => {}, []);
  return (
    // <div className='border-2 border-l-secondary rounded-2xl'>
    <div className="fixed md:flex md:flex-col sm:ml-24 mr-4 w-auto h-auto px-4 py-2">
      <p className="font-sans my-4 text-xl font-bold">Your Recent Activity</p>
      <ol className="relative border-l border-gray-200 dark:border-gray-700">
        {
          <li className="mb-10 ml-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              February 2022
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Posted
            </h3>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              Get access to over 20+ pages including a dashboard
            </p>
            <a
              href="#"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
            >
              Learn more{" "}
              <svg
                className="w-3 h-3 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </li>
        }
      </ol>
    </div>
    // </div>
  );
};

export default Timeline;
export { ActivityTimeline };
