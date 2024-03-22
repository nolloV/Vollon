import React, { useEffect, useState } from "react";
import "./skills.scss";
import skillsData from "../../data/skills.json";
import { useTranslation } from "react-i18next";

function Skills() {
  const { t } = useTranslation();
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    setSkills(skillsData.skills);
  }, []);

  return (
    <section className="skills__container">
      <h2
        id="skills"
        className="skills__container--title intro_container--title"
      >
        {t("skills")}
        <span className="intro_container--subtitle">{t("about")}</span>
      </h2>
      <ul className="skills__container--list">
        {skills.map((skill) => (
          <li
            key={skill.id}
            className={`skills__container--card skills__container--card-${skill.id}`}
          >
            <div
              className={`skills__container--logo skills__container--logo-${skill.id} skills__container--logo-${skill.id}`}
            >
              <div className="logo-background">
                <div className="logo">
                  <img
                    src={process.env.PUBLIC_URL + skill.logo}
                    alt={skill.skill}
                  />
                </div>
              </div>
            </div>
            <span className="skills__container--subtitle">{skill.skill}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
