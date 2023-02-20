import React from 'react'

export default function ContactForm () {

  return (
    <div>
        <form
          className="contact-form"
          action="/thanks"
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact" />
          <p>
            <label>
              Imię i nazwisko
              <input type="text" name="name" required />
            </label>
          </p>
          <p>
            <label>
              Email
              <input type="email" name="email" required />
            </label>
          </p>
          <p>
            <label>
              Cel wyceny
              <input type="text" name="target" required />
            </label>
          </p>
          <p>
            <label>
              Adres wycenianej nieruchomości
              <input type="text" name="address" required />
            </label>
          </p>
          <p>
            <label>
              Temat
              <input type="text" name="subject" required />
            </label>
          </p>
          <p>
            <label>
              Wiadomość
              <textarea name="message" required></textarea>
            </label>
          </p>
          <p className="text-align-right">
            <button
              className="button mrb-button mrb-button-light"
              sx={{
                variant: "variants.button",
              }}
              type="submit"
            >
              Wyślij wiadomość
            </button>
          </p>
        </form>
      </div>
  )
}