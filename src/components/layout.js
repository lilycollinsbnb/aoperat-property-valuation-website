/** @jsx jsx */
import { jsx } from "theme-ui"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Logo from "./logo"
import Navigation from "./navigation"

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
