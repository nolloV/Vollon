import React from "react";
import { Parallax } from "react-parallax";
import { useTranslation } from "react-i18next";
import "./intro.scss";
import { useDarkMode } from "../../context";

function Intro() {
  const { t } = useTranslation();
  const image = process.env.PUBLIC_URL + "/assets/web-developer.webp"; // Référence de l'image
  const { darkMode } = useDarkMode();

  const logoSrc = darkMode
    ? process.env.PUBLIC_URL + "/images/Logo_Nom_Blanc.svg"
    : process.env.PUBLIC_URL + "/images/Logo_Nom.svg";

  return (
    <section className="intro_container">
      <div className="intro_container--encart">
        <Parallax bgImage={image} strength={500}>
          <div className="intro_container--section">
            <div className="intro_container--sidepart"></div>
            <div className="intro_container--text">
              <h2 className="intro_container--name">
                <img
                  className="intro_container--logo"
                  src={logoSrc}
                  alt="Logo"
                />
                <div className="intro_container--dot">.</div>
              </h2>
              <p className="intro_container--desc">{t("intro_paragraph1")}</p>
              <p>{t("intro_paragraph3")}</p>
              <a className="intro_container--link" href="#projects">
                {t("intro_paragraph2")}
              </a>
            </div>
          </div>
        </Parallax>
      </div>
    </section>
  );
}

export default Intro;
