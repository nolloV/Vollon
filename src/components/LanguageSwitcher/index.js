import React from "react";
import { useTranslation } from "react-i18next";
import "./languageSwitcher.scss";

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  // instance i18n est utilisé pour interagir avec la bibliothèque i18next
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  // la langue en cours sera stocké dans i18n
  return (
    <div className="switch_container">
      <div className="switch_container--block">
        {/* Opération logique qui affiche le bouton de changement de langue 
pour l'anglais si la langue actuelle n'est pas l'anglais, 
et pour le français si la langue actuelle n'est pas le français. */}
        {i18n.language !== "en" && (
          <button
            className="switch_container--button"
            onClick={() => changeLanguage("en")} //bouton pour appeler changeLanguage avec la langue en paramètre
          >
            FR
          </button>
        )}
        {i18n.language !== "fr" && (
          <button
            className="switch_container--button"
            onClick={() => changeLanguage("fr")}
          >
            EN
          </button>
        )}
      </div>
    </div>
  );
}

export default LanguageSwitcher;
