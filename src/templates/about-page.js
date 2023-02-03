import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import ImageRightSection from "../components/image-right-section"
import Content, { HTMLContent } from "../components/content.js";

export const pageQuery = graphql`
  query AboutQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      excerpt(pruneLength: 140)
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
export const AboutPageTemplate = ({title, subheading, image, content, contentComponent}) => {
  const PageContent = contentComponent || Content;

  return (
    <div>
      <ImageRightSection TitleTag={"h1"} title={title} subheading={subheading} img={image} />
      <div className="container is-fullhd mrb-container">
        <PageContent className="content" content={content} />
        <div className="buttons is-centered">
          <Link className="button mrb-button mrb-button-light" to="/services">
            Sprawdź naszą ofertę
          </Link>
        </div>
      </div>
    </div>
  )
}

const AboutPage = ({ data }) => {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html, excerpt } = markdownRemark

  return (
    <Layout className="page">
      <Seo title={frontmatter.title} description={excerpt} />
      <AboutPageTemplate
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
