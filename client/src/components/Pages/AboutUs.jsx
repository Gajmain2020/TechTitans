import NavBar from "../Navbar/Navbar";
function AboutUs() {
  return (
    <div>
      <NavBar />
      <div className=" h-screen flex flex-col gap-4 align-items q-full">
        <div className="bg-background h-40  flex flex-col  justify-center  items-center gap-2">
        <p className="text-4xl font-bold w-full text-center mb-4  flex justify-center items-center">
          About Us
        </p>

        </div>
        {/* <p className="p-2 mt-4 font-bold text-2xl tracking-wide w-full text-center">
          Our Mission
        </p> */}
        <p className="p-2 mt-4 text-xl px-20 tracking-wide w-full text-center">
        <p className="text-xl">          Welcome to Credit Connect, your trusted platform for peer-to-peer
          lending and borrowing within our local college community.</p>
        At Credit Connect, our mission is simple:
          We understand the challenges that students face when it comes to
          managing their finances. Whether it's unexpected expenses, buying
          textbooks, or covering tuition fees, we believe that students should
          have a reliable and convenient way to support each other financially.
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
