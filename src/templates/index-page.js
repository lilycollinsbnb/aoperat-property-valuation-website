/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { graphql} from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import HomePageBody from "./body/index-page-body"
import FreeTrialPopup from "../components/free-trial-popup"
// import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3"

export const pageQuery = graphql`
  query HomeQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        carouselItems {
          image {
            childImageSharp {
              gatsbyImageData(quality: 100, layout: FULL_WIDTH)
            }
          }
          text
          redirectTo
        }
      }
    }
  }
`

const HomePage = ({ data }) => {
  const { markdownRemark} = data // data.markdownRemark holds your post data
  const { frontmatter } = markdownRemark
  const isSSR = typeof window === "undefined"

  return (
    // <GoogleReCaptchaProvider reCaptchaKey={process.env.GATSBY_GOOGLE_RECAPTCHA_SITE_KEY}>
    <Layout>
      <Seo />
      { !isSSR &&
        <React.Suspense fallback={<div />}>
          { window.location.href.indexOf('open-popup=true') > -1 &&
            <FreeTrialPopup />
          }
        </React.Suspense>
      }
      <HomePageBody
        carouselItems={frontmatter.carouselItems}
      />
    </Layout>
    // </GoogleReCaptchaProvider>
  )
}

export default HomePage
