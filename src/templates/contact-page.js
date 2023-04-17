/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import ContactForm from "../components/contact-form"
import { GatsbyImage } from "gatsby-plugin-image"
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3"
import { FormspreeProvider } from "@formspree/react"

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
  const { frontmatter } = markdownRemark

  return (
    <GoogleReCaptchaProvider reCaptchaKey={process.env.GATSBY_GOOGLE_RECAPTCHA_SITE_KEY}>
    <Layout className="contact-page" sx={contactStyles.contactPage}>
      <Seo
        title={"Wycena - Kontakt"}
        description={frontmatter.title + " " + site.siteMetadata.title}
      />
      <section>
        <div className="container is-fullhd mrb-container">
          <div className="columns is-variable is-8">
            <div className="column is-flex is-flex-direction-column is-justify-content-center">
              <h1 className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen is-color-primary-green">{frontmatter.title}</h1>
              <FormspreeProvider project={process.env.GATSBY_FORMSPREE_PROJECT_ID}>
                <ContactForm/>
              </FormspreeProvider>
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
    </GoogleReCaptchaProvider>
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
