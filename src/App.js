import React from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Experiences from "./pages/Experiences/Experiences.js";
import Projects from "./pages/Projects/Projects.js"
import Start from "./pages/Start/Start.jsx"
import Home from "./pages/Home/Home.jsx"
import About from "./pages/About/About.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/experiences" element={<Experiences />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App

