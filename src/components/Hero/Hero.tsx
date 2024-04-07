import HeroImage from "@/assets/img/hero.png";

const Hero = () => {
  return (
    <div className="mx-auto px-32 m-10 mt-0 flex  justify-around  items-center h-[80vh] bg-stone-800 ">
      <div className="p-4 flex flex-col gap-1 justify-center w-1/2 ">
        <div className="text-7xl font-medium  mt-5 text-white">
          Reflecting
          <br /> <span className="font-bold text-teal-500 ">
            Nerds
          </span> and <span className="font-bold text-teal-500">Greeks</span>
        </div>
        <p className="text-wrap text-gray-300 text-lg mt-3">
          Where developers unite for a dose of coding humor and entertainment,
          featuring memes and jokes powered by the Gemini API. Laugh, share, and
          enjoy the lighter side of coding with fellow developers.
        </p>
      </div>
      <div className=" flex justify-center items-center ">
        <img src={HeroImage} alt={"Vegetables"} width={600} />
      </div>
    </div>
  );
};

export default Hero;
