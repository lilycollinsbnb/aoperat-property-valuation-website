import React from "react"
import Popup from 'reactjs-popup';
import { Link } from "gatsby";
import 'reactjs-popup/dist/index.css';
import { useForm } from "@formspree/react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

export default function FreeTrialPopup () {

  const { executeRecaptcha } = useGoogleReCaptcha();

  const [state, handleSubmit] = useForm("contact", {
    data: { "g-recaptcha-response": executeRecaptcha }
  })
  
    return (
        <Popup 
            contentStyle={{minWidth: "300px", maxHeight: "600px", overflow: "auto", borderRadius: "15px", zIndex: "200000", padding: "0px"}} 
            overlayStyle={{zIndex: "20000"}}
            defaultOpen={true} 
            modal
            closeOnDocumentClick={false}
        >
      {(close) => {
        if(state.succeeded === true){
          close()
        }

        return(
          <div className="popup-content-div">
          <div className="center-content popup-header-wrapper mt-3">
            <h3 className="has-text-weight-semibold is-size-4-mobile is-size-3-tablet is-size-2-widescreen is-color-primary-green">
              Wycena.biz
            </h3> 
          </div>
          <button className="popup-close-button" type="button"  onClick={close} >
            &times;
          </button>
          <div className="popup-form-wrapper">
            <div className="center-content is-medium-large-font mt-5">
            Skorzystaj z promocji! <b>-20%</b> rabatu na <b>pierwszą</b> wycenę nieruchomości. Zostaw swój adres mailowy, jeśli  jesteś zainteresowany.
            </div>
            <div className="center-content mt-3">
              <form 
                className="contact-form"
                name="contact"
                onSubmit={handleSubmit}
              >
                <div className="field">
                  <label className="label mrb-label-hidden" htmlFor={"email"}>
                    Adres email
                  </label>
                    <div className="control">
                      <input
                        className="text-input"
                        type={"email"}
                        name={"email"}
                        id={"email"}
                        placeholder={"Adres email"}
                        required={true}
                      />
                    </div>
                </div>
                <div className="mt-5 checkbox-field">
                  <input
                      className="checkbox mr-3"
                      type={"checkbox"}
                      name={"consent-to-contact"}
                      id={"consent-to-contact"}
                      required={true}
                      
                    />
                  <label htmlFor="consent-to-contact" className="center-content is-small-font-2">Na podstawie art. 10 ust. 2 ustawy o świadczeniu usług drogą elektroniczną wyrażam zgodę na przekazywanie przez AOperat Prosta Spółka Akcyjna, na udostępniony przeze mnie adres e-mail informacji handlowych.</label>
                </div>
                <button disabled={state.submitting} type="submit" className="mt-5 has-text-weight-bold button mrb-button mrb-button-dark is-full-width">ZAPISZ MNIE</button>
                
                <div className="mrb-text-div is-small-font mt-3 mb-3">
                  Przed wyrażeniem zgody prosimy o zapoznanie się z <Link to="/terms-and-conditions">Regulaminem</Link> i <Link to="/privacy-policy">Polityką Prywantości</Link>. Wyrażenie zgody na kontakt drogą mailową i zaakceptowanie postanowień Polityki Prywatności oraz Regulaminu jest dobrowolne ale niezbędne do tego abyśmy mogli się z Tobą skontaktować. Zgodę można w każdej chwili cofnąć kontaktując się z Administratorem Danych Osobwych wskazanym w <Link to="/privacy-policy">Polityce Prywantości</Link>. 
                </div>
               
              </form>
            </div>
          </div>
        </div>
        )
      }}
      </Popup>
    )
}