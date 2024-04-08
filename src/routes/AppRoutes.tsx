import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandingPage from "@/pages/LandingPage";
import ProgrammingMeme from "@/pages/ProgrammingMeme";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/programming-meme" element={<ProgrammingMeme />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
