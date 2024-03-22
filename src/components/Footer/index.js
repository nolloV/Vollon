import "./footer.scss";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { useTranslation } from "react-i18next";
import { useDarkMode } from "../../context";

function Footer() {
  const { t } = useTranslation();
  const { darkMode } = useDarkMode();

  const logoSrc = darkMode
    ? process.env.PUBLIC_URL + "/images/Logo_FOOTER_Night.svg"
    : process.env.PUBLIC_URL + "/images/Logo_FOOTER.svg";

  return (
    <footer>
      <div className="footer__container">
        <ul className="footer__container--list">
          <li>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visitez mon profil LinkedIn"
            >
              <FontAwesomeIcon
                className="footer__container--icon"
                icon={faLinkedin}
              />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/nolloV"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visitez mon profil GitHub"
            >
              <FontAwesomeIcon
                className="footer__container--icon"
                icon={faGithub}
              />
            </a>
          </li>
        </ul>

        <p className="footer__container--copy">
          © 2024 Vollon HU, {t("copyright")}
        </p>
      </div>
      <div>
        <img className="footer__container--logo" src={logoSrc} alt="Logo" />
      </div>
    </footer>
  );
}

export default Footer;
