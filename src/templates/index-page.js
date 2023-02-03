/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql} from "gatsby"

import Layout from "../components/layout"
import BlogListHome from "../components/blog-list-home"
import Seo from "../components/seo"
import Carousel from "../components/carousel"

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

export const HomePageTemplate = ({carouselItems}) => {

  return (
    <div >
      <Carousel items={carouselItems} />
      <section>
        <div className="container is-fullhd mrb-container">
          <h3 className="has-text-weight-semibold is-size-4-mobile is-size-3-tablet is-size-2-widescreen is-color-primary-green">
            Aktualności
          </h3> 
          <BlogListHome />
        </div>
      </section>
    </div>
  )
}
const HomePage = ({ data }) => {
  const { markdownRemark} = data // data.markdownRemark holds your post data
  const { frontmatter } = markdownRemark

  return (
    <Layout>
      <Seo />
      <HomePageTemplate 
        carouselItems={frontmatter.carouselItems}
      />
    </Layout>
  )
}

export default HomePage
