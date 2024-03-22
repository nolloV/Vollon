import React, { createContext, useContext, useEffect, useState } from "react";

// Créer un contexte pour le mode sombre
const DarkModeContext = createContext();

// Fournisseur de contexte pour le mode sombre
export function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  // Utiliser useEffect pour mettre à jour la valeur du mode sombre dans le stockage local
  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

// Créer un hook personnalisé pour utiliser le contexte du mode sombre
export function useDarkMode() {
  return useContext(DarkModeContext);
}
