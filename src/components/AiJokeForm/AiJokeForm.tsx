import React, { useState } from "react";

interface AiJokeFormProps {
  onSubmit: (joke: string) => void;
}

const AiJokeForm: React.FC<AiJokeFormProps> = ({ onSubmit }) => {
  const [joke, setJoke] = useState("");

  const handleJokeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setJoke(e.target.value);
  };

  const handleSubmit = () => {
    // Pass the generated joke to the parent component
    onSubmit(joke);
  };

  return (
    <div className="ml-20 p-6 max-w-xl flex flex-col gap-2">
      <h2 className="text-5xl font-bold mb-4 text-white">
        Generate
        <br /> <span className="text-5xl text-teal-500">Programming Joke</span>
      </h2>
      <input
        className="w-full px-3 py-2 mb-2 border rounded-md focus:outline-none focus:border-blue-500"
        type="text"
        placeholder="Enter a programming language"
        value={joke}
        onChange={handleJokeChange}
      />
      <button
        onClick={handleSubmit}
        className="px-3 py-2 mt-4 text-white text-xl font-extrabold bg-green-500 rounded-md focus:outline-none hover:bg-green-600"
      >
        Generate Joke
      </button>
    </div>
  );
};

export default AiJokeForm;
