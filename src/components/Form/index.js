import "./form.scss";
import React from "react";

function Form() {
  return (
    <section className="form">
      <h2 id="form" className="intro_container--title">
        Contact
        <span className="intro_container--subtitle">Contactez-moi</span>
      </h2>
      <p>Vous avez un projet ? Discutons-en !</p>
      <form action="#" method="post" className="form__container">
        <label className="hidden" htmlFor="name">
          Nom
        </label>
        <input
          className="form__container--area"
          type="text"
          name="name"
          id="name"
          placeholder="Nom"
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
          placeholder="Adresse e-mail"
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
          placeholder="Votre message"
          required
        ></textarea>
        <input
          type="submit"
          value="Envoyer"
          className="form__container--submit"
        />
      </form>
    </section>
  );
}

export default Form;
