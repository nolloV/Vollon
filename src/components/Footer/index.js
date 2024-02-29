import "./footer.scss";
import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer>
      <div className="footer__container">
        <ul className="footer__container--list">
          <li>
            <NavLink to="/">
              <FontAwesomeIcon
                className="footer__container--icon"
                icon={faLinkedin}
              />
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              <FontAwesomeIcon
                className="footer__container--icon"
                icon={faGithub}
              />
            </NavLink>
          </li>
        </ul>
        <p className="footer__container--copy">
          © 2024 Vollon HU, Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
