import React from 'react'
import { Link } from "gatsby"
import { useForm } from "@formspree/react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

export default function ContactForm () {

  const { executeRecaptcha } = useGoogleReCaptcha();

  const [state, handleSubmit] = useForm(`${process.env.GATSBY_FORMSPREE_FORM_ID}`, {
    data: { "g-recaptcha-response": executeRecaptcha }
  })

  return (
    <div>
        <form
          className="contact-form"
          name="contact"
          onSubmit={handleSubmit}
        >
          <div>
            <label htmlFor="name">
              Imię i nazwisko
            </label>
            <input className="text-input" type="text" name="name" id="name" required />
          </div>
          <div>
            <label htmlFor="email">
              Email
            </label>
            <input className="text-input"  type="email" name="email" id="email" required />
          </div>
          <div>
            <label htmlFor="target">
              Cel wyceny
            </label>
            <input className="text-input" type="text" name="target" id="target" required />
          </div>
          <div>
            <label htmlFor="address">
              Adres wycenianej nieruchomości
            </label>
            <input className="text-input" type="text" name="address" id="address" required />
          </div>
          <div>
            <label htmlFor="name">
              Temat
            </label>
            <input className="text-input" type="text" name="subject" id="subject" required />
          </div>
          <div>
            <label htmlFor="message">
              Wiadomość
            </label>
            <textarea name="message" id="message" required />
          </div>
          <div className="checkbox-field">
            <input
              type="checkbox"
              name="consent-to-contact"
              id="consent-to-contact"
              required 
            />
            <label htmlFor="consent-to-contact">Na podstawie art. 10 ust. 2 ustawy o świadczeniu usług drogą elektroniczną wyrażam zgodę na przekazywanie przez AOperat Prosta Spółka Akcyjna, na udostępniony przeze mnie adres e-mail informacji handlowych.</label>
          </div>
          <div className="checkbox-field">
            <input
                type="checkbox"
                name="accepted-terms"
                id="accepted-terms"
                required
              />
            <label htmlFor="accepted-terms">Oświadczam, że zapoznałem(am), się z treścią Regulaminu oraz Polityki Prywatności i akcęptuję zawarte w nich postanowienia.</label>
          </div>
          <div className="mrb-text-div mt-6">
            Przed wyrażeniem zgody prosimy o zapoznanie się z <Link to="/terms-and-conditions">Regulaminem</Link> i <Link to="/privacy-policy">Polityką Prywantości</Link>. Wyrażenie zgody na kontakt drogą mailową i zaakceptowanie postanowień Polityki Prywatności oraz Regulaminu jest dobrowolne ale niezbędne do tego abyśmy mogli się z Tobą skontaktować. Zgodę można w każdej chwili cofnąć kontaktując się z Administratorem Danych Osobwych wskazanym w <Link to="/privacy-policy">Polityce Prywantości</Link>. 
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
          { state.success && 
            <p className="is-color-primary-green">Wiadomość została wysłana</p>
          }
        </form>
      </div>
  )
}