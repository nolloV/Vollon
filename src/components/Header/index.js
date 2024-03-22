import "./header.scss";
import React from "react";
import { useTranslation } from "react-i18next";
import DarkModeToggle from "../DarkMode";
import LanguageSwitcher from "../LanguageSwitcher";
import Loader from "../Loader";
import { useDarkMode } from "../../context";

function Header() {
  const { t } = useTranslation();
  const { darkMode } = useDarkMode();
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const logoSrc = darkMode
    ? process.env.PUBLIC_URL + "/images/Logo_Header_Blanc.svg"
    : process.env.PUBLIC_URL + "/images/Logo_Header.svg";

  return (
    <div>
      <Loader />
      <header className="header">
        <nav className="header__container">
          <h1 className="header__container--name">
            <img
              onClick={scrollToTop}
              className="header__container--logo"
              src={logoSrc}
              alt="Logo"
            />
          </h1>
          <div className="header__container--section">
            <div className="header__container--titles">
              {/* <h1 className="header__container--name hidden">
                Vollon Hu Web developer
              </h1> */}
              {/* <a href="#intro">{t("presentation")}</a> */}
              <a href="#skills">{t("skills")}</a>
              <a href="#projects">{t("realisation")}</a>
              <a href="#form">Contact</a>
            </div>
            <div className="header__container--module">
              <DarkModeToggle />
              <LanguageSwitcher />
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;
