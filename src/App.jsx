import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home/home";
import Admin from "./components/pages/Admin/admin";
import Quiz from "./components/pages/Quiz/quiz";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/quiz" element={<Quiz />} />
    </Routes>
  );
}

export default App;
