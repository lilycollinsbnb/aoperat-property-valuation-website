import React from "react"
import { graphql} from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { HTMLContent } from "../components/content.js";
import AboutPageBody from "./body/about-page-body";

export const pageQuery = graphql`
  query AboutQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title,
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


const AboutPage = ({ data }) => {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html, excerpt } = markdownRemark

  return (
    <Layout className="page">
      <Seo title={"Wycena - " + frontmatter.title} description={frontmatter.subheading} />
      <AboutPageBody
        contentComponent={HTMLContent}
        title={frontmatter.title}
        seoDescription={excerpt}
        subheading={frontmatter.subheading}
        image={frontmatter.image}
        content={html}
      />
    </Layout>
  )
}

export default AboutPage
