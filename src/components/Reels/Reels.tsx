import ReelCarousel from "./ReelCarousel";

const Reels = () => {
  const reelLinks = [
    "https://github.com/SusheelThapa/Quine-devmeme/assets/83917129/a3cf4e40-7a9e-4c71-a485-e2c994892442",
    "https://github.com/SusheelThapa/Quine-devmeme/assets/83917129/1b4f0037-9d8f-4410-81d1-431bf3b6b0d0",
    "https://github.com/SusheelThapa/Quine-devmeme/assets/83917129/3fe82221-e38a-4b05-9276-bdb0907619cf",
    "https://github.com/SusheelThapa/Quine-devmeme/assets/83917129/12f3d38a-374a-40c3-8596-c061b2f7c73c",
    "https://github.com/SusheelThapa/Quine-devmeme/assets/83917129/922c375f-e6c8-41bc-9005-12eb2a7af51e",
    "https://github.com/SusheelThapa/Quine-devmeme/assets/83917129/77459767-8bcc-46d0-a648-7c18e570e4af",
  ];

  return (
    <div className="bg-gray-800 min-h-[65vh] flex flex-col gap-5 justify-center items-center py-10">
      <h1 className="text-5xl font-bold mb-4 text-white text-center">
        Programming <span className="text-teal-500">Reels</span>
      </h1>
      <ReelCarousel reelLinks={reelLinks} />
    </div>
  );
};

export default Reels;
