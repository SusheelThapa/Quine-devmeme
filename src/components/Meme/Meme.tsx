import { useState } from "react";
import DisplayMeme from "./DisplayMeme";
import GenerateMeme from "./GenerateMeme";

const Meme = () => {
  const [displayMeme, setDisplayMeme] = useState<boolean>(false);

  const handleShowMeme = () => {
    setDisplayMeme(true);
  };
  const handleHideMeme = () => {
    setDisplayMeme(false);
  };

  return (
    <div className="h-[65vh] bg-stone-800 flex justify-center items-center">
      {!displayMeme ? (
        <GenerateMeme onSubmit={handleShowMeme} />
      ) : (
        <DisplayMeme />
      )}
    </div>
  );
};

export default Meme;
