import NavBar from "../Navbar/Navbar";
function ContactUs() {
  return (
    <div>
      <NavBar />
      <div className="flex flex-col gap-4">
      <div className="w-full justfiy-center flex">
        <img
          src="https://webstaging-strapi.knowlarity.com/uploads/contact_us_5a6756504e.jpg "
          className="w-full h-[50vmin]"
        />
      </div>
      <div className="flex justify-center">
      <div className="flex flex-col items-start w-auto   gap-2">
      <p className=" text-2xl"> We can help. Our team of experts is on hand to answer your questions. </p>
      {/* <div className="flex flex-col justify-start items-center  gap-4"> */}
        {/* <div className="text-xl">
          <div className="flex flex-col font-bold">
              Contact Info
          </div>
          <div className="">
              <p>gitesh.sarvaiya@gmail.com</p>
              <div className="flex justify-center items-center">
              <p>+91-9302811622</p>
              <p>+91-9589170732</p>
              </div>
              </div>
          </div> */}
          <div className='flex justify-start items-center'>
          <div className='flex gap-2'>
            <div className="h-full font-bold text-2xl" >
                Contact Us:
            </div>
            <div className="h-auto text-2xl" >
              <p>
                gitesh.sarvaiya28@gmail.com 
              </p>
                <p>
                  +91-9302811622
                </p>
                <p>
                  +91-9589170732
                </p>
            </div>
            </div>
            </div>
          </div>
          </div>
      </div>
      </div>
      // </div>
  );
}

export default ContactUs;
