import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandingPage from "@/pages/LandingPage";
import AiJokeGenerator from "@/pages/AiJokeGenerator";
import ProgrammingMeme from "@/pages/ProgrammingMeme";
import { useFlags } from "flagsmith/react";
import MaintainencePage from "@/pages/MaintainencePage";
import ComingSoon from "@/pages/ComingSoon";
import ProgrammingReels from "@/pages/ProgrammingReels";

const AppRoutes = () => {
  const { maintainance_break, coming_soon, programming_reel } = useFlags([
    "maintainance_break",
    "coming_soon",
    "programming_reel",
  ]);

  console.log(programming_reel.enabled);
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
        {programming_reel.enabled && (
          <Route path="/programming-reels" element={<ProgrammingReels />} />
        )}
      </Routes>{" "}
    </Router>
  );
};

export default AppRoutes;
