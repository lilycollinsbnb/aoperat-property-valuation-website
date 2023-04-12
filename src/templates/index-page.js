/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { graphql} from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import HomePageBody from "./body/index-page-body"
import FreeTrialPopup from "../components/free-trial-popup"

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
  )
}

export default HomePage
