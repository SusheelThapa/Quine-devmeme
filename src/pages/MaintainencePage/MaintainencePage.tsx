import background from "@/assets/img/maintainance.png";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa";

const MaintainencePage = () => {
  return (
    <div className="w-screen h-screen bg-black flex justify-center items-center flex-col">
      <div className="h-[26rem] w-[20rem]">
        <img src={background} />
      </div>
      <div>
        <h1 className="text-5xl text-white font-bold my-8">
          Website under maintenance
        </h1>
      </div>
      <h1 className="text-3xl text-gray-300">
        This website is currently undergoing scheduled maintenance. We should be
        back shortly.
      </h1>

      <div className="mt-14">
        <h1 className="text-2xl text-white font-bold text-center">
          We are social
        </h1>
        <div className="mt-8 flex flex-row gap-8 ">
          <div className="text-blue-500 text-5xl">
            <CiFacebook />
          </div>
          <div className="text-red-500 text-5xl">
            <FaInstagram />
          </div>
          <div className="text-blue-400 text-5xl">
            <CiLinkedin />
          </div>
          <div className="text-blue-500 text-5xl">
            <FaTwitter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaintainencePage;
