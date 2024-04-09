import { FaGithub } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className=" py-8 px-64 flex justify-between items-center h-20 text-xl text-white bg-gray-900">
      {/* Logo section */}
      <Link to="/">
        <div className="flex gap-2 items-end justify-end">
          {/* Logo of the product goes here */}
          {/* <img
            src={Logo}
            alt="Logo of ZeroSpoil"
            className="w-10 rounded-full"
          /> */}
          <div className="text-3xl font-extrabold ">
            <span className="text-[#f9e59c]">dev</span>
            <span className="text-orange-600">meme</span>
          </div>
        </div>
      </Link>

      {/* navigation menu */}
      <div className="space-x-4">
        <ul className="flex gap-10  justify-start items-center font-medium">
          <li className="hover:text-teal-400 cursor-pointer">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-teal-400 cursor-pointer">
            <Link to="/#products">Features</Link>
          </li>
          <li className="hover:text-teal-400 cursor-pointer">
            <Link to="/#about-us">Contact Us</Link>
          </li>
        </ul>
      </div>

      {/* Github button */}
      <Link to={"https://github.com/SusheelThapa"}>
        <Button className="text-xl bg-white text-black p-4 py-6 font-medium  hover:bg-teal-800 hover:text-white  flex justify-center align-center gap-4 rounded-xl">
          <FaGithub className="text-2xl" />
          <span className="font-extrabold tracking-wider">Github</span>
        </Button>
      </Link>
    </div>
  );
};

export default NavBar;
