import React from "react"
import { graphql, Link } from "gatsby"
import ImageRightSection from "../components/image-right-section"
import Content, { HTMLContent } from "../components/content.js";
import Layout from "../components/layout"
import Seo from "../components/seo"

export const pageQuery = graphql`
  query ServicesQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      excerpt(pruneLength: 140)
      frontmatter {
        title
        subheading
        image {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`
const ServicesPage = ({ data }) => {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html, excerpt } = markdownRemark

  return (
    <Layout className="page">
      <Seo title={frontmatter.title} description={excerpt} />
      <ImageRightSection TitleTag={"h1"} title={frontmatter.title} subheading={frontmatter.subheading} img={frontmatter.image} />
      <section>
        <div className="container is-fullhd mrb-container">
            <div className="buttons is-centered">
              <h3 className="has-text-weight-semibold is-size-4-mobile is-size-3-tablet is-size-2-widescreen is-color-primary-green">
                Jak to działa?
              </h3>
            </div>
            <div className="ul-style buttons is-centered ">
              <ul>
                <li>Wysyłasz do nas szczegóły zlecenia</li>
                <li>Nasz rzeczoznawca kontaktuje się z Tobą <br/> i ustala datę oględzin nieruchomości</li>
                <li>Po dokonaniu oględzin nieruchomości rzeczoznawca <br/> sporządza dokument wyceny i przesyła go <br/> Tobie drogą mailową</li>
              </ul>
            </div>
        </div>
      </section>
      <section>
        <div className="container is-fullhd mrb-container">
            <div className="buttons is-centered">
              <h3 className="has-text-weight-semibold is-size-4-mobile is-size-3-tablet is-size-2-widescreen is-color-primary-green">
                Napisz do nas
              </h3>
            </div>
            <div className="buttons is-centered">
              Nasi rzeczoznawcy posiadają wieloletnie doświadczenie w zakresie wyceny lokali mieszklanych w dużych miastach.
              Koszt usługi jest zawsze ustalany indywidualnie. Wyślij nam szczegóły zlecenia, a my skontaktujemy się z Tobą.
            </div>
            <div className="buttons is-centered">
              <Link className="button mrb-button mrb-button-light" to="/contact">
                Kontakt
              </Link>
            </div>
        </div>
      </section>
    </Layout>
  )
}

export default ServicesPage
