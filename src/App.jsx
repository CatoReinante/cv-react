import { Navigate, Route, Routes } from "react-router";
import "./App.css";
import HomePage from "./components/HomePage";
import WorkExperience from "./components/WorkExperience";
import Education from "./components/Education";

function App() {
  return (
    <>
      <Routes>
        <Route path="/JoaquinReinante" element={<HomePage />} />
        <Route path="/" element={<Navigate to="/JoaquinReinante" />} />
        <Route path="/work-experience" element={<WorkExperience />} />
        <Route path="/education" element={<Education />} />
      </Routes>
    </>
  );
}

export default App;
