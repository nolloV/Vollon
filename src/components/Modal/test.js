import "./modal.scss";
import React from "react";
import Slider from "../Slider";
import skillsData from "../../data/skills.json";
import { useTranslation } from "react-i18next";

function Modal({
  title,
  imagesSrc,
  description,
  mission,
  missionResume,
  skills,
  githubLink,
  onClose,
}) {
  const { t } = useTranslation();
  // Assigner directement les données importées à skillData
  const skillData = skillsData.skills;

  return (
    // Fermeture au clique en dehors de la modale
    <section className="modal" onClick={onClose}>
      {/* stopPropagation pour que les cliques dans la modale ne ferme pas */}
      <aside className="modal__container" onClick={(e) => e.stopPropagation()}>
        {/* Ferme la modale en cliquant sur la croix */}
        <button className="modal__close" onClick={onClose}>
          &times;
        </button>
        <h2>{title}</h2>
        <Slider imagesSrc={imagesSrc} />
        <div className="modal__container--description">{t(description)}</div>
        <h3>{t("Mission")}</h3>
        <div className="modal__container--description">
          <div>
            <p>{t(mission)}</p>
            <ul className="modal__container--description--list">
              {/* Prend la props de Modal missionResume en map pour créer la liste*/}
              {missionResume.map((missionResume, index) => (
                <li key={index}>{t(missionResume)}</li>
              ))}
            </ul>
          </div>
          <div className="modal__container--description--logo">
            <ul className="modal__container--description--skills">
              {/* Prend la props de Modal skills en map pour créer la liste*/}
              {skills.map((skill, index) => {
                // On cherche dans le tableau skillData un skill correspodant au skill actuel pour le stocker dans skillInfo
                const skillInfo = skillData.find((s) => s.skill === skill);
                return (
                  <li key={index}>
                    <img
                      className="skillslist__container--logo"
                      src={
                        skillInfo
                          ? process.env.PUBLIC_URL + skillInfo.logo
                          : undefined
                      }
                      alt={skill}
                    />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <a
          className="modal__container--link"
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("Lien vers Github")}
        </a>
      </aside>
    </section>
  );
}

export default Modal;
