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
        listSectionTitle,
        listItems,
        contactSectionTitle,
        contactSectionText,
      }
    }
  }
`

export const ServicesPageTemplate = ({ title, subheading, image, listSectionTitle, listItems, contactSectionTitle, contactSectionText, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <div>
      <ImageRightSection TitleTag={"h1"} title={title} subheading={subheading} img={image} />
      <section>
        <div className="container is-fullhd mrb-container">
            <div className="is-centered">
              <h3 className="has-text-weight-semibold is-size-4-mobile is-size-3-tablet is-size-2-widescreen is-color-primary-green">
                {listSectionTitle}
              </h3>
            </div>
            <div className="ul-style is-centered ">
              <ul>
                {listItems.map((item) => (<li>{item}</li>)) }
              </ul>
            </div>
        </div>
      </section>
      <PageContent className="content" content={content} />
      <section>
        <div className="container is-fullhd mrb-container">
            <div className="is-centered">
              <h3 className="has-text-weight-semibold is-size-4-mobile is-size-3-tablet is-size-2-widescreen is-color-primary-green">
                {contactSectionTitle}
              </h3>
            </div>
            <div className="is-centered">
              {contactSectionText}
            </div>
            <div className="is-centered">
              <Link className="button mrb-button mrb-button-light" to="/contact">
                Kontakt
              </Link>
            </div>
        </div>
      </section>
    </div>
  )
}
const ServicesPage = ({ data }) => {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html, excerpt } = markdownRemark

  return (
    <Layout className="page">
      <Seo title={frontmatter.title} description={excerpt} />
      <ServicesPageTemplate 
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
