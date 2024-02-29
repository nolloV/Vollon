import "./header.scss";
import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div>
      <div className="loader-container">
        <div className="loader-container__loader"></div>
      </div>
      <header className="header">
        <nav className="header__container">
          <h1 className="header__container--name">
            <NavLink to="/">Portfolio Développeur Web</NavLink>
            <NavLink to="/">Vollon Hu</NavLink>
          </h1>
          <div className="header__container-titles">
            <a href="#intro">Présentation</a>
            <a href="#skills">Mes compétences</a>
            <a href="#projects">Mes réalisations</a>
            <a href="#form">Contact</a>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;
