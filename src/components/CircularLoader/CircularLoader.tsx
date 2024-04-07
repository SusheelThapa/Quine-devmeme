// CircularLoader.jsx

import { FaSpinner } from "react-icons/fa";

const CircularLoader = () => {
  return (
    <div className="flex justify-center items-center h-full;">
      <FaSpinner className="rounded-full w-12 h-12 animate-spin text-white" />
    </div>
  );
};

export default CircularLoader;
