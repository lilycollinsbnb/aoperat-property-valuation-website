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
          <div>
            <label htmlFor="name">
              Imię i nazwisko
            </label>
            <input type="text" name="name" id="name" required />
          </div>
          <div>
            <label htmlFor="email">
              Email
            </label>
            <input type="email" name="email" id="email" required />
          </div>
          <div>
            <label htmlFor="target">
              Cel wyceny
            </label>
            <input type="text" name="target" id="target" required />
          </div>
          <div>
            <label htmlFor="address">
              Adres wycenianej nieruchomości
            </label>
            <input type="text" name="address" id="address" required />
          </div>
          <div>
            <label htmlFor="name">
              Temat
            </label>
            <input type="text" name="subject" id="subject" required />
          </div>
          <div>
            <label htmlFor="message">
              Wiadomość
            </label>
            <textarea name="message" id="message" required />
          </div>
          <div className="text-align-right">
            <button
              className="button mrb-button mrb-button-light"
              sx={{
                variant: "variants.button",
              }}
              type="submit"
            >
              Wyślij wiadomość
            </button>
          </div>
        </form>
      </div>
  )
}