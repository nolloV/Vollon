import React, { useState, useEffect } from "react";
import "./darkmode.scss";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Lire l'état du mode sombre du stockage local au montage
  useEffect(() => {
    const isDark = localStorage.getItem("darkMode") === "true";
    setDarkMode(isDark);
  }, []);

  // Basculer le mode sombre, mettre à jour l'état et le stockage local
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("darkMode", !darkMode);
  };

  // Appliquer le mode sombre au corps du document
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-theme");
      document.body.classList.remove("light-theme");
    } else {
      document.body.classList.add("light-theme");
      document.body.classList.remove("dark-theme");
    }
  }, [darkMode]);

  return (
    <div className="dark-mode-toggle">
      <button onClick={toggleDarkMode}>{darkMode ? "🌙" : "🌞"}</button>
    </div>
  );
};

export default DarkModeToggle;
