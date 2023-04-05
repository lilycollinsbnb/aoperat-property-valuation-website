/** @jsx jsx */
import { jsx } from "theme-ui"
import { useStaticQuery, graphql, Link } from "gatsby"
import Header from "./header"
import Logo from "./logo"
import Navigation from "./navigation"
import {CookieNotice} from "gatsby-cookie-notice"

import "bootstrap/dist/css/bootstrap.min.css";
import "../bulma.scss"
import "../assets/scss/style.scss"

import Footer from "./footer"

const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        siteTitle: title
      }
    }
  }
`

const Layout = ({ children, className, props }) => {
  const { site} = useStaticQuery(query)
  const { siteTitle } = site.siteMetadata

  return (
    <div>
      <Header>
        <div>

        </div>
        <div sx={layoutStyle.nav}>
          <Navigation />
        </div>
        <div sx={layoutStyle.appearance}>
          
        </div>
      </Header>
      <div className="container small-margin-container">
        <Logo title={siteTitle} />
      </div>
      <CookieNotice
        backgroundClasses="container cookie-consent-container is-background-primary-green"
        acceptButtonText="Akceptuję"
        declineButtonText="Odrzucam"
        buttonWrapperClasses= "mt-3"
        wrapperClasses="cookie-consent-buttons-wrapper cookie-notice"
        cookieListClasses="row cookie-list is-color-white"
        personalizeButtonClasses="mt-3 btn btn-lg btn-secondary mx-2"
        personalizeButtonText="Personalizuj"
        personalizeValidationText="Zapisz"
        cookies={[
                {name: 'necessary', editable: false, default: true, title: 'Niezbędne pliki cookie', text: 'Pliki niezbędne do poprawnego funkcjonowania strony.' },
                {name: 'gatsby-gdpr-facebook-pixel', editable: true, default: false, title: 'Facebook Pixel', text: 'Facebook Pixel pomaga nam w poprawianiu komfortu korzystania ze strony i udostępnia nam informacje w jaki sposób odwiedzający korzystają ze strony i jakie elementy przykuwają ich uwagę.'}
          ]}>
          <h3 className="is-color-white">Ta strona korzysta z plików cookies.</h3>
          <p className="is-color-white mt-3 mb-3">Ty wybierasz, z których plików cookie będziemy mogli korzystać. Korzystając z serwisu zgadzasz się na ich zapis i wykorzystanie plików cookie oraz akceptujesz politykę plików cookie. Więcej dowiesz się czytając rozdział Pliki cookies zawarty w Polityce Prywatności <Link to="/privacy-policy#cookie-section" className="mrb-button-link is-color-white">klikając tutaj</Link>. </p>
      </CookieNotice>
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout

const layoutStyle = {
  appearance: {
    display: ["none", "none", "none", "flex"],
    alignItems: "center",
    gap: 4,
  },
  nav: {
    display: "flex",
    alignItems: "center",
    gap: 4,
  },
}
