import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { AiOutlinePicture, AiOutlineFileText } from "react-icons/ai";
import { FaCode } from "react-icons/fa";

const features = [
  {
    title: "Programming Meme ",
    icon: <AiOutlinePicture className="text-red-500" size={65} />,
    description:
      "Generate hilarious memes using our vast collection of developer-themed images sourced from our database. Express your coding experiences through witty captions and share them with the developer community.",
    link: "/image-meme",
  },
  {
    title: "AI Joke Generator",
    icon: <AiOutlineFileText className="text-green-400" size={65} />,
    description:
      "Enjoy a continuous supply of laughter with our text-based joke generator, powered by Gemini API. Explore a plethora of jokes tailored to developers and tech enthusiasts, guaranteed to lighten up your day.",
    link: "/ai-text-joke",
  },
  {
    title: "Programming Reel",
    icon: <FaCode className="text-blue-600" size={65} />,
    description:
      "Dive into our curated collection of programming reels, showcasing the most entertaining and insightful videos from the coding world. Stay inspired and informed while enjoying captivating content.",
    link: "#",
  },
];

const Features = () => {
  return (
    <div
      id="features"
      className="pt-28 flex flex-col justify-center items-center gap-10 bg-stone-900"
    >
      <div className="text-6xl text-white">
        <span>Features</span>
      </div>
      <div className="w-3/5 text-center text-lg text-gray-300">
        "Discover the essence of DevMeme through our feature-packed section.
        Create hilarious memes with our Image Generator and enjoy witty
        developer jokes with our Text Generator. Dive in and experience the fun
        side of coding!"
      </div>
      <div className="my-10 flex gap-20 justify-center items-center">
        {features.map((product, index) => {
          return (
            <Link to={product.link ? product.link : "#"}>
              <Card
                className="w-96 bg-gray-900 border-none  h-96 hover:shadow-xl hover:transform hover:scale-105  transition flex justify-center items-center flex-col cursor-pointer rounded-3xl"
                key={index}
              >
                <CardHeader>
                  <CardTitle className="flex justify-between items-center flex-col gap-8 text-white">
                    {product.icon}
                    <span className="text-center">{product.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center text-gray-400">
                  {product.description}
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Features;
