import { useState, useEffect } from "react";

interface Props {
  days: number;
}

const ComingSoon = ({ days }: Props) => {
  // Convert days to milliseconds
  const targetDate = new Date().getTime() + days * 24 * 60 * 60 * 1000;

  // State to hold the remaining time
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  // Function to calculate the time remaining until the target date
  function calculateTimeRemaining() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    // Calculating days, hours, minutes, and seconds
    const remainingDays = Math.floor(difference / (1000 * 60 * 60 * 24));
    const remainingHours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const remainingMinutes = Math.floor(
      (difference % (1000 * 60 * 60)) / (1000 * 60)
    );
    const remainingSeconds = Math.floor((difference % (1000 * 60)) / 1000);

    return {
      days: remainingDays,
      hours: remainingHours,
      minutes: remainingMinutes,
      seconds: remainingSeconds,
    };
  }

  // Update the remaining time every second
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <div className="text-5xl font-extrabold mb-4">
        <span className="text-yellow-300">dev</span>
        <span className="text-orange-400">meme</span>
      </div>
      <h1 className="text-6xl font-bold mb-8 text-teal-500">Coming Soon!</h1>
      <div className="flex justify-center space-x-4 mb-4">
        <div className="flex flex-col items-center justify-center bg-gray-800 bg-opacity-75 rounded-md p-4 space-y-2">
          <div className="flex items-center">
            <span className="text-4xl font-bold">{timeRemaining.days}</span>
            <span className="ml-1">Days</span>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center bg-gray-800 bg-opacity-75 rounded-md p-4 space-y-2">
          <div className="flex items-center">
            <span className="text-4xl font-bold">{timeRemaining.hours}</span>
            <span className="ml-1">Hours</span>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center bg-gray-800 bg-opacity-75 rounded-md p-4 space-y-2">
          <div className="flex items-center">
            <span className="text-4xl font-bold">{timeRemaining.minutes}</span>
            <span className="ml-1">Minutes</span>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center bg-gray-800 bg-opacity-75 rounded-md p-4 space-y-2">
          <div className="flex items-center">
            <span className="text-4xl font-bold">{timeRemaining.seconds}</span>
            <span className="ml-1">Seconds</span>
          </div>
        </div>
      </div>
      <div className=" p-6 mt-5 mb-4  text-center">
        <h2 className="text-3xl font-bold mb-2">
          Subscribe to our <span className="text-teal-500">Newsletter</span>
        </h2>
        <p className="text-sm text-gray-300 mb-4">
          Stay up-to-date with the latest memes, jokes, and updates.
        </p>
        <form className="flex flex-row justify-center gap-4 items-center">
          <div>
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-gray-700 text-white rounded-md py-2 px-4 w-full focus:outline-none"
            />
          </div>
          <button className="bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 rounded-md transition-all duration-300">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default ComingSoon;
