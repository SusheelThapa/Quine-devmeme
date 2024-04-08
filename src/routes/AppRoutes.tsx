import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandingPage from "@/pages/LandingPage";
import AiJokeGenerator from "@/pages/AiJokeGenerator";
import ProgrammingMeme from "@/pages/ProgrammingMeme";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/ai-text-joke" element={<AiJokeGenerator />} />
        <Route path="/programming-meme" element={<ProgrammingMeme/>}/>
        </Routes>
    </Router>
  )
};

export default AppRoutes;
