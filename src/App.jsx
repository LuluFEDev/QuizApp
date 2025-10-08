import { useState } from "react";
import Button from "./components/atoms/Button/button";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import smileyFace from "./assets/smiley.jpg";
import "./App.css";
import AddQuestion from "./components/molecules/AddQuestion/addQuestion";
import Questions from "./components/organisms/Questions/questions";
import { Routes, Route } from 'react-router-dom';
import Home from "./components/pages/Home/home";
import Admin from "./components/pages/Admin/admin";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin" element={<Admin />} />
         </Routes>
    </>
  );
}

export default App;
