import "./header.scss";
import React from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import DarkModeToggle from "../DarkMode";
import LanguageSwitcher from "../LanguageSwitcher";

function Header() {
  const { t } = useTranslation();
  return (
    <div>
      <div className="loader-container">
        <div className="loader-container__loader"></div>
      </div>
      <header className="header">
        <nav className="header__container">
          <h1 className="header__container--name">
            <NavLink to="/">{t("developer")}</NavLink>
            <NavLink to="/">Vollon Hu</NavLink>
          </h1>
          <div className="header__container--titles">
            <a href="#intro">{t("presentation")}</a>
            <a href="#skills">{t("skills")}</a>
            <a href="#projects">{t("realisation")}</a>
            <a href="#form">Contact</a>
          </div>
          <div className="header__container--module">
            <DarkModeToggle />
            <LanguageSwitcher />
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;
