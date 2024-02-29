import "./intro.scss";
import React from "react";

function Intro() {
  return (
    <section className="intro_container">
      <h2 className="intro_container--title" id="intro">
        Présentation
        <span className="intro_container--subtitle">Qui suis-je ?</span>
      </h2>
      <div className="intro_container--section">
        <div className="intro_container--sidepart"></div>
        <div className="intro_container--text">
          <p>
            Salut, je suis Vollon, développeur front-end passionné. Diplômé
            d'OpenClassrooms, j'ai une solide expérience du développement en
            HTML/CSS ainsi que dans des projets avancés en JavaScript et React.
          </p>
          <p>
            Maîtrise des technologies : HTML, CSS, SASS, JavaScript, React,
            Redux, SEO. Je privilégie la simplicité et la lisibilité dans mon
            code.
          </p>
          <p>
            À la recherche de nouvelles opportunités pour contribuer à des
            projets excitants avec ma passion, mon dévouement et ma constante
            volonté d'apprendre.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Intro;
