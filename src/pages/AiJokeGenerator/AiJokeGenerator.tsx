import { useState } from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import AiJokeForm from "@/components/AiJokeForm";
import axios from "axios";
import { useToast } from "@/components/ui/use-toast";
import CircularLoader from "@/components/CircularLoader/CircularLoader";

const AiJokeGenerator = () => {
  const { toast } = useToast();
  const [generatedJoke, setGeneratedJoke] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const generateJoke = async (params: string) => {
    const response = await axios({
      url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${import.meta.env.VITE_GEMINI_API_KEY}`,
      method: "post",
      data: {
        contents: [
          {
            parts: [
              {
                text: `Generate a programming joke on ${params} programming language.`,
              },
            ],
          },
        ],
      },
    });
    console.log(
      response["data"]["candidates"][0]["content"]["parts"][0]["text"]
    );
    return response["data"]["candidates"][0]["content"]["parts"][0]["text"];
  };
  const handleSubmit = async (jokeSetup: string) => {
    toast({
      variant: "joke-generator",
      description: "😄 Generating a programming joke just for you!",
    });
    try {
      setLoading(true);
      console.log();
      // Simulating an API call delay (replace this with your actual API call logic)
      const response = await generateJoke(jokeSetup);
      console.log(response);
      setGeneratedJoke(response);
    } catch (error) {
      console.error("Error making API call:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <NavBar />
      <div className="px-64 grid grid-cols-2 py-20 h-[70vh] justify-center items-center align-middle bg-gray-800">
        <AiJokeForm onSubmit={handleSubmit} />
        {loading ? (
          <CircularLoader />
        ) : generatedJoke ? (
          <div className="text-center mt-8 bg-gray-800">
            <p className="text-5xl underline text-teal-500">Joke</p>
            <p className="text-xl text-gray-200 font-bold">{generatedJoke}</p>
          </div>
        ) : null}
      </div>
      <Footer />
    </>
  );
};

export default AiJokeGenerator;
