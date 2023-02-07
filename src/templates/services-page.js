import React from "react"
import { graphql} from "gatsby"
import { HTMLContent } from "../components/content.js";
import Layout from "../components/layout"
import Seo from "../components/seo"
import ServicesPageBody from "./body/services-page-body.js";

export const pageQuery = graphql`
  query ServicesQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        subheading
        image {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
        listSectionTitle,
        listItems,
        contactSectionTitle,
        contactSectionText,
      }
    }
  }
`


const ServicesPage = ({ data }) => {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark

  return (
    <Layout className="page">
      <Seo title={"Wycena - Usługi"} description={frontmatter.subheading} />
      <ServicesPageBody 
        title={frontmatter.title}
        subheading={frontmatter.subheading}
        image={frontmatter.image}
        listSectionTitle={frontmatter.listSectionTitle}
        listItems={frontmatter.listItems}
        contactSectionTitle={frontmatter.contactSectionTitle}
        contactSectionText={frontmatter.contactSectionText}
        contentComponent={HTMLContent}
        content={html}
      />
    </Layout>
  )
}

export default ServicesPage
