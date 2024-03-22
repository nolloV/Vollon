import "./home.scss";
import React from "react";
import Form from "../../components/Form";
import Intro from "../../components/Intro";
import Skills from "../../components/Skills";
import Projects from "../../components/Projects";
import { useTranslation } from "react-i18next";
import ArrowUp from "../../components/ArrowUp";

function Home() {
  const { t } = useTranslation();
  return (
    <main className="main__container">
      <Intro />
      <Skills />
      <section className="projects__container">
        <h2
          id="projects"
          className="projects__container--title intro_container--title"
        >
          {t("realisation")}
        </h2>
        <Projects />
      </section>
      <Form />
      <ArrowUp />
    </main>
  );
}

export default Home;
