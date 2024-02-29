import React, { useEffect, useState } from "react";
import "./skills.scss";
import skillsData from "../../data/skills.json";

function Skills() {
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
        Mes compétences
        <span className="intro_container--subtitle">A propos</span>
      </h2>
      <ul className="skills__container--list">
        {skills.map((skill, index) => (
          <li key={index} className="skills__container--card">
            <img
              className="skills__container--logo"
              src={process.env.PUBLIC_URL + skill.logo}
              alt={skill.skill}
            />
            {skill.skill}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
