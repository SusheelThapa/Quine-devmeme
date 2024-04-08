import { useState } from "react";
import DisplayMeme from "./DisplayMeme";
import GenerateMeme from "./GenerateMeme";
import { generateRandomNumbers } from "@/utils/getRandomNumber";

const Meme = () => {
  const [displayMeme, setDisplayMeme] = useState<boolean>(false);
  const [memeurl, setmemeurl] = useState<string[]>([]);

  const handleShowMeme = () => {
    setDisplayMeme(true);

    const urls: string[] = generateRandomNumbers(1147, 1948, 8).map(
      (key: number) => {
        return `${import.meta.env.VITE_MEME_LINK + key}.png`;
      }
    );
    setmemeurl(urls);
  };

  return (
    <div className=" bg-stone-800 flex justify-center items-center">
      {!displayMeme ? (
        <GenerateMeme onSubmit={handleShowMeme} />
      ) : (
        <DisplayMeme imageUrls={memeurl} />
      )}
    </div>
  );
};

export default Meme;
