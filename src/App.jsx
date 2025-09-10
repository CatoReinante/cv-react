import { Navigate, Route, Routes } from "react-router";
import "./App.css";
import HomePage from "./components/HomePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/JoaquinReinante" element={<HomePage />} />
        <Route path="/" element={<Navigate to="/JoaquinReinante" />} />
      </Routes>
    </>
  );
}

export default App;
