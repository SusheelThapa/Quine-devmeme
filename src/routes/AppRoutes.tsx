import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandingPage from "@/pages/LandingPage";
import AiJokeGenerator from "@/pages/AiJokeGenerator/AiJokeGenerator";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/ai-text-joke" element={<AiJokeGenerator />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
