interface Props {
  onSubmit: () => void;
}

const GenerateMeme = ({ onSubmit }: Props) => {
  return (
    <div className="text-center">
      <div className="py-10   text-white text-center flex justify-between items-center">
        <div>
          <div className="text-7xl ">
            <span className="text-amber-500">Coding</span> meets{" "}
            <span className="text-green-500">Humour</span>
          </div>
          <div className="text-2xl mt-2 text-gray-200">
            Relieve, Stress, Unwind and Laugh
          </div>
        </div>
      </div>

      <button
        onClick={onSubmit}
        className="px-4 py-2 bg-white hover:bg-teal-600 hover:text-white text-xl font-bold text-black rounded-lg"
      >
        Show Meme
      </button>
    </div>
  );
};

export default GenerateMeme;
