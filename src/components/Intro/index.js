import "./intro.scss";
import React from "react";
import { useTranslation } from "react-i18next";

function Intro() {
  const { t } = useTranslation();
  return (
    <section className="intro_container">
      <h2 className="intro_container--title" id="intro">
        {t("presentation")}
        <span className="intro_container--subtitle">{t("whoAmI")}</span>
      </h2>
      <div className="intro_container--section">
        <div className="intro_container--sidepart"></div>
        <div className="intro_container--text">
          <p>{t("paragraph1")}</p>
          <p>{t("paragraph2")}</p>
          <p>{t("paragraph3")}</p>
        </div>
      </div>
    </section>
  );
}

export default Intro;
