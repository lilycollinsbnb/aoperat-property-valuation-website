/** @jsx jsx */
import { jsx } from "theme-ui"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Logo from "./logo"
import Navigation from "./navigation"

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
      <Logo title={siteTitle} />
        <div sx={layoutStyle.nav}>
          <Navigation />
        </div>
        <div sx={layoutStyle.appearance}>
          
        </div>
      </Header>

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
