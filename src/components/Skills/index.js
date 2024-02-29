import React, { useEffect, useState } from "react";
import "./skills.scss";

function Skills() {
  const [skillsData, setSkillsData] = useState([]);

  useEffect(() => {
    const fetchSkills = async () => {
      const response = await fetch("/skills.json");
      const data = await response.json();
      setSkillsData(data.skills);
    };

    fetchSkills();
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
        {skillsData.map((skill, index) => (
          <li key={index} className="skills__container--card">
            <img
              className="skills__container--logo"
              src={skill.logo}
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
