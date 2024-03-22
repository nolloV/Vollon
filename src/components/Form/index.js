import "./form.scss";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useForm, ValidationError } from "@formspree/react";

function Form() {
  const { t } = useTranslation();
  const [state, handleSubmit] = useForm("xnqezrwo"); // Backend Formspree pour la gestion du formulaire
  const [bounce, setBounce] = useState(false); // Effet de rebond au clique Submit

  return (
    <section className="form">
      <h2 id="form" className="intro_container--title">
        Contact
        <span className="intro_container--subtitle"> {t("contact")}</span>
      </h2>
      <p className="form__subtitle">{t("project")}</p>
      <form onSubmit={handleSubmit} className="form__container">
        <div className="form__container--name">
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
          <ValidationError prefix="Nom" field="name" errors={state.errors} />
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
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
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
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <input
          type="submit"
          value={t("Submit")}
          className={`form__container--submit ${bounce ? "bounce" : ""}`} // Effet de rebond au clique
          disabled={state.submitting}
          onClick={() => {
            setBounce(true);
            setTimeout(() => setBounce(false), 300);
          }}
        />
        {/* Si le formulaire a été soumis avec succès, affichez le message de remerciement */}
        {state.succeeded && <p>{t("thanksMessage")}</p>}
      </form>
    </section>
  );
}

export default Form;
