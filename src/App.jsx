import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import { Routes, Route } from 'react-router-dom'

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedDarkMode = localStorage.getItem('darkMode');
    return savedDarkMode ? JSON.parse(savedDarkMode) : true;
  });

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', JSON.stringify(newDarkMode));
  };

  return (
    <div className="h-screen max-h-screen">
      <div className={darkMode ? "dark" : ""}>
        <main className="bg-gray-200 px-10 dark:bg-gray-900 md:px-20 lg:px-40">
          <Navbar onToggleDarkMode={toggleDarkMode} />
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/experience' element={<Experience />}></Route>
            <Route path='/skills' element={<Skills />}></Route>
          </Routes>
        </main>
      </div>
    </div>

  );
}