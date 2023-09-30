import NavBar from "../Navbar/Navbar"
function AboutUs() {
  return (
    <div>
      <NavBar />
      <p className="text-center text-2xl mt-4 font-bold">Our Mission</p>
      <div className=" h-screen flex w-full md:justify-between pb-2 pl-2 pr-2 xsm:flex-col md:flex-row items-center">
        <img src="https://www.poynter.org/wp-content/uploads/2019/03/shutterstock_446870920.jpg" alt="not found" className="w-[60vmin] h-[30vmin] p-2"/>
        <p className="p-2">
        Credit Connect is dedicated to providing accessible and responsible lending solutions to empower individuals and businesses on their financial journey.Our aim is to empower every individual to access stress-free loans without the need for collateral. Lenders can trust that their funds will be repaid seamlessly, without any hassle.
        </p>
      </div>
    </div>
  )
}

export default AboutUs
