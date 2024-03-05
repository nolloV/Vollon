import "./form.scss";
import React from "react";
import { useTranslation } from "react-i18next";

function Form() {
  const { t } = useTranslation();
  return (
    <section className="form">
      <h2 id="form" className="intro_container--title">
        Contact
        <span className="intro_container--subtitle"> {t("contact")}</span>
      </h2>
      <p>{t("project")}</p>
      <form action="#" method="post" className="form__container">
        <label className="hidden" htmlFor="name">
          Nom
        </label>
        <input
          className="form__container--area"
          type="text"
          name="name"
          id="name"
          placeholder={t("name")}
          required
        />
        <label className="hidden" htmlFor="email">
          Email
        </label>
        <input
          className="form__container--area"
          type="email"
          name="email"
          id="email"
          placeholder={t("address")}
          required
        />
        <label className="hidden" htmlFor="message">
          Message
        </label>
        <textarea
          className="form__container--areas"
          name="message"
          id="message"
          cols="30"
          rows="10"
          placeholder={t("message")}
          required
        ></textarea>
        <input
          type="submit"
          value={t("Submit")}
          className="form__container--submit"
        />
      </form>
    </section>
  );
}

export default Form;
