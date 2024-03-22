import React, { useEffect } from "react";
import "./darkmode.scss";
import { useDarkMode } from "../../context"; // Importer le hook useDarkMode du contexte

// Utiliser le hook useDarkMode pour obtenir l'état actuel du mode sombre et la fonction pour le changer
const DarkModeToggle = () => {
  const { darkMode, setDarkMode } = useDarkMode();

  // Basculer le mode sombre, mettre à jour l'état avec "!"
  // Mise à jour l'état du contexte
  // Cela permettra à tous les composants qui utilisent le même contexte d'être informés du changement
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Appliquer le mode sombre au corps du document avec des classes CSS selon l'état de darkMode
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-theme");
      document.body.classList.remove("light-theme");
    } else {
      document.body.classList.add("light-theme");
      document.body.classList.remove("dark-theme");
    }
  }, [darkMode]); // Réagir aux changements de l'état du mode sombre

  return (
    <div className="dark-mode-toggle">
      <button onClick={toggleDarkMode}>
        {darkMode ? ( // Utiliser l'état du mode sombre pour déterminer quelle image afficher
          <img
            className="darkmode__logo"
            src={process.env.PUBLIC_URL + "/images/Soleil.svg"}
            alt="Logo"
          />
        ) : (
          <img
            className="darkmode__logo"
            src={process.env.PUBLIC_URL + "/images/Lune.svg"}
            alt="Logo"
          />
        )}
      </button>
    </div>
  );
};

export default DarkModeToggle;
