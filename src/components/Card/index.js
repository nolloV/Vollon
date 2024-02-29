import React from "react";
import "./card.scss";

const Card = ({ project }) => (
  <div className="projects__container--card">
    <div className="projects__card">
      <div className="projects__card--pictures">
        <img
          className="projects__card--img"
          src={process.env.PUBLIC_URL + project.image}
          alt={project.title}
        />
      </div>
      <div className="projects__card--content">
        <ul className="projects__card--content--hashtags">
          {project.hashtags.map((hashtag, index) => (
            <li key={index}>{hashtag}</li>
          ))}
        </ul>
        <h3 className="projects__card--content--title">{project.title}</h3>
      </div>
    </div>
  </div>
);

export default Card;
