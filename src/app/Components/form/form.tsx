"use client";
import React from "react";
import style from "./form.module.css";

const Form = () => {
  return (
    <div className={style.main}>
      <div className={style.form_container}>
        <h1 className="flex items-center justify-center font-bold text-neutral-500 text-xl">
          Text to me
        </h1>

        <form
          className={style.form}
          onSubmit={(e) => {
            e.preventDefault(); // Evita o recarregamento da página
            const form = e.target as HTMLFormElement;
            const userEmail = (
              form.elements.namedItem("email") as HTMLInputElement
            ).value;
            const message = (
              form.elements.namedItem("textarea") as HTMLTextAreaElement
            ).value;

            // Seu email fixo para receber as mensagens
            const recipientEmail = "fernando.neto02@gmail.com";

            // Criando o link mailto com os dados preenchidos
            const mailtoLink = `mailto:${recipientEmail}?subject=Contato de ${userEmail}&body=${encodeURIComponent(
              message
            )}`;

            window.location.href = mailtoLink;
          }}
        >
          <div className={style.form_group}>
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className={style.form_group}>
            <label htmlFor="textarea">Send me a message...</label>
            <textarea
              name="textarea"
              id="textarea"
              rows={10}
              cols={50}
              required
            />
          </div>
          <button className={style.form_submit_btn} type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
