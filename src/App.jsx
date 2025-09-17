import { Navigate, Route, Routes } from "react-router";
import "./App.css";
import HomePage from "./components/HomePage";

import Navbar from "./components/Navbar";
import GamesPage from "./components/GamesPage";
import TatetiVsMaquina from "./components/Tateti";
import PiedraPapelTijera from "./components/PiedraPapelTijera";
import BouncingBall from "./components/BouncingBall";
import Education from "./components/Education";
import { academicEducation, technicalEducation } from "./data/EducationData";
import WorkTimeline from "./components/WorkTimeline";
import { workExperiences } from "./data/WorkExperience";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/JoaquinReinante" element={<HomePage />} />
        <Route path="/" element={<Navigate to="/JoaquinReinante" />} />
        <Route path="/JoaquinReinante/games" element={<GamesPage />} />
        <Route
          path="/JoaquinReinante/career"
          element={<WorkTimeline workExperiences={workExperiences} />}
        />
        <Route
          path="/JoaquinReinante/education"
          element={
            <Education
              academicEducation={academicEducation}
              technicalEducation={technicalEducation}
            />
          }
        />
        <Route
          path="/JoaquinReinante/games/rock-paper-scissors"
          element={<PiedraPapelTijera />}
        />
        <Route
          path="/JoaquinReinante/games/tictactoe"
          element={<TatetiVsMaquina />}
        />
        <Route
          path="/JoaquinReinante/games/bouncing-ball"
          element={<BouncingBall />}
        />
      </Routes>
    </>
  );
}

export default App;
