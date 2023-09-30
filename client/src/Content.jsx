import "./index.css";
// import Footer from "./components/Footer/Footer";
import Post from "./components/Post/Post";
import SideBar from "./components/SideBar/SideBar";
import Timeline from "./components/Timeline/Timeline";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchPost } from "./Api/user";

export default function Content() {
  const [data, setData] = useState("");

  // const arrayOfObjects = [
  //   { id: 1, name: 'Alice' },
  //   { id: 2, name: 'Bob' },
  //   { id: 3, name: 'Charlie' },
  // ];
  
  
  // arrayOfObjects.map((obj) => console.log(obj.name));


    

  useEffect(() => {
    fetchPost().then((res) => setData(res.posts))
  }, []);
  
  console.log(data)

  return (
    <div className="flex">
      <SideBar />
      <div className=" flex flex-col mt-24 xsm:w-full md:w-[50%] ">
        {data.map((data) => (
          <div>
          <Link to={"/post/" + `${data._id}`}>
            <Post borrowerName={data.borrowerName} createdAt={data.createdAt} />
          </Link>
          </div>
        ))} 

        <Link to="/post/Divyanshi Srivastava">
          <Post name="Divyanshi Srivastava" date="12 dec" />
        </Link>
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
