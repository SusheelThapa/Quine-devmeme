import { useState } from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import AiJokeForm from "@/components/AiJokeForm";
import axios from "axios";
import { useToast } from "@/components/ui/use-toast";
import CircularLoader from "@/components/CircularLoader/CircularLoader";

interface JokeResponse {
  joke: string;
}

const AiJokeGenerator = () => {
  const { toast } = useToast();
  const [generatedJoke, setGeneratedJoke] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (jokeSetup: string) => {
    toast({
      variant: "joke-generator",
      description: "😄 Generating a programming joke just for you!",
    });
    try {
      setLoading(true);

      // Simulating an API call delay (replace this with your actual API call logic)
      const response = await axios.post(
        "http://localhost:8000/api/generate_joke/",
        { jokeSetup }
      );
      const jokeData: JokeResponse = response.data;

      setGeneratedJoke(jokeData.joke);
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
            <p className="text-gray-600">Here's your joke:</p>
            <p className="text-lg font-bold">{generatedJoke}</p>
          </div>
        ) : null}
      </div>
      <Footer />
    </>
  );
};

export default AiJokeGenerator;
