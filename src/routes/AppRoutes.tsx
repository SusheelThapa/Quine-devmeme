import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandingPage from "@/pages/LandingPage";
import AiJokeGenerator from "@/pages/AiJokeGenerator";
import ProgrammingMeme from "@/pages/ProgrammingMeme";
import { useFlags } from "flagsmith/react";
import MaintainencePage from "@/pages/MaintainencePage";
import ComingSoon from "@/pages/ComingSoon";

const AppRoutes = () => {
  const { maintainance_break, coming_soon } = useFlags([
    "maintainance_break",
    "coming_soon",
  ]);
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            maintainance_break.enabled ? (
              <MaintainencePage />
            ) : coming_soon.enabled ? (
              <ComingSoon days={30} />
            ) : (
              <LandingPage />
            )
          }
        />
        <Route path="/ai-text-joke" element={<AiJokeGenerator />} />
        <Route path="/programming-meme" element={<ProgrammingMeme />} />
      </Routes>{" "}
    </Router>
  );
};

export default AppRoutes;
