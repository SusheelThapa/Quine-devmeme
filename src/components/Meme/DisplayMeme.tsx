import { useState } from "react";
import { FaExpand } from "react-icons/fa";
import Lightbox from "react-spring-lightbox";

interface Props {
  imageUrls: string[];
}
const DisplayMeme = ({ imageUrls }: Props) => {
  
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const gotoPrevious = () =>
    lightboxIndex > 0 && setLightboxIndex(lightboxIndex - 1);

  const gotoNext = () =>
    lightboxIndex + 1 < imageUrls.length && setLightboxIndex(lightboxIndex + 1);

  console.log(imageUrls)
  return (
    <div>
      <div
        className={`container mx-auto my-16 ${lightboxOpen ? "blur-3xl" : ""}`}
      >
        <h1 className="text-teal-500 mb-20 text-6xl font-semibold underline text-center my-10">
          Meme Gallery
        </h1>
        <div className="grid grid-cols-5 gap-16">
          {imageUrls.map((imageUrl, index) => (
            <div
              key={index}
              className="flex flex-col items-center shadow-inner shadow-gray-500  p-4  rounded-3xl overflow-hidden cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              <img
                src={imageUrl}
                alt={`Meme ${index + 1}`}
                className="result-image max-w-full"
                width={300}
                height={300}
              />x
              <div className="mt-2 text-white">
                <FaExpand className="text-xl inline-block mr-2" />
                <span className="text-gray-300">Click to enlarge</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {lightboxOpen && (
        <Lightbox
          isOpen={lightboxOpen}
          onPrev={gotoPrevious}
          onNext={gotoNext}
          images={imageUrls.map((imageUrl) => ({
            src: imageUrl,
            alt: "Meme",
          }))}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
        />
      )}
    </div>
  );
};

export default DisplayMeme;
