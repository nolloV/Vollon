import React from "react";
import "./card.scss";

const Card = ({ project }) => (
  <div className="card_container">
    <div className="projects__container--card">
      <div className="projects__card">
        <div className="projects__card--pictures">
          <img
            className="projects__card--img"
            src={process.env.PUBLIC_URL + project.image} // lien public de l'image
            alt={project.title}
          />
        </div>
        <div className="projects__card--content">
          <h3 className="projects__card--content--title">{project.title}</h3>
          <ul className="projects__card--content--hashtags">
            {project.hashtags.map(
              (
                hashtag,
                index // boucle map pour obtenir tous les hashtags du projet
              ) => (
                <li key={index}>{hashtag}</li> // va créer un nouveau <li> pour chaque élément
              )
            )}
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default Card;
