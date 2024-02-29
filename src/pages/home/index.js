import "./home.scss";
import React from "react";
import Form from "../../components/Form";
import Intro from "../../components/Intro";
import Skills from "../../components/Skills";
import Projects from "../../components/Projects";

function Home() {
  return (
    <main className="main__container">
      <Intro />
      <Skills />
      <section className="projects__container">
        <h2
          id="projects"
          className="projects__container--title intro_container--title"
        >
          Mes réalisations
          <span className="intro_container--subtitle">Portfolio</span>
        </h2>
        <Projects />
      </section>
      <Form />
    </main>
  );
}

export default Home;
