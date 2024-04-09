import { useState, useRef, useEffect, useCallback } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

interface Props {
  reelLinks: string[];
}

const ReelCarousel = ({ reelLinks }: Props) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    if (videoRef.current) videoRef.current.play();
  };

  useEffect(() => {
    handlePlay(); // Play video on mount

    return () => {
      if (videoRef.current) videoRef.current.pause(); // Pause on unmount
    };
  }, [videoRef]);

  const handleSlideChange = useCallback(() => {
    if (videoRef.current) videoRef.current.pause();
  }, [videoRef]);

  const handlePrevSlide = () => {
    const newSlide = () =>
      currentSlide === 0 ? reelLinks.length - 1 : currentSlide - 1;
    setCurrentSlide(newSlide);
  };

  const handleNextSlide = () => {
    const newSlide = () =>
      currentSlide === reelLinks.length - 1 ? 0 : currentSlide + 1;
    setCurrentSlide(newSlide);
  };

  return (
    <div className="reel-carousel mb-4 flex items-center">
      <button className="carousel-control prev" onClick={handlePrevSlide}>
        <FiChevronLeft className="text-white text-3xl" />
      </button>
      <div className="carousel flex-grow">
        <div className="carousel-slide">
          <video
            ref={videoRef}
            controls
            width="320"
            height="160"
            className="rounded-lg shadow-lg"
            onLoadedMetadata={handlePlay}
            onPlay={handleSlideChange}
            key={currentSlide}
          >
            <source src={reelLinks[currentSlide]} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <button className="carousel-control next" onClick={handleNextSlide}>
        <FiChevronRight className="text-white text-3xl" />
      </button>
    </div>
  );
};

export default ReelCarousel;
