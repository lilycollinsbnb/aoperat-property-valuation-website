/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql } from "gatsby"
import { getImage } from "gatsby-plugin-image";
import Layout from "../components/layout"
import Seo from "../components/seo"
import ContactForm from "../components/contact-form"
import { GatsbyImage } from "gatsby-plugin-image"

export const pageQuery = graphql`
  query ContactQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      excerpt(pruneLength: 140)
      frontmatter {
        title
        image {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`

const Contact = ({ data }) => {
  const { markdownRemark, site } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark

  return (
    <Layout className="contact-page" sx={contactStyles.contactPage}>
      <Seo
        title={frontmatter.title}
        description={frontmatter.title + " " + site.siteMetadata.title}
      />
      <section>
        <div className="container is-fullhd mrb-container">
          <div
            className="description"
            dangerouslySetInnerHTML={{ __html: html }}
          />
          <div className="columns is-variable is-8">
            <div className="column is-flex is-flex-direction-column is-justify-content-center">
              <span className="has-text-weight-semibold mrb-label">WYCENA</span>
              <h1 className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen is-color-primary-green">{frontmatter.title}</h1>
                <ContactForm/>
            </div>
            <div className="column is-flex is-flex-direction-column is-justify-content-center">
              <GatsbyImage
                image={getImage(frontmatter.image)}
                objectFit={"cover"}
                style={{
                  gridArea: "1/1",
                  // You can set a maximum height for the image, if you wish.
                  width: "100%",
                }}
                // You can optionally force an aspect ratio for the generated image
                aspectratio={3 / 1}
                // This is a presentational image, so the alt should be an empty string
                alt=""
                formats={["auto", "webp", "avif"]}
              />
              </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Contact

const contactStyles = {
  contactPage: {
    input: {
      border: "6px solid",
      borderColor: "inputBorder",
      bg: "inputBackground",
      outline: "none",
    },
    textarea: {
      border: "6px solid",
      borderColor: "inputBorder",
      bg: "inputBackground",
      outline: "none",
    },
  },
}
