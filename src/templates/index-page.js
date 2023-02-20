/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql} from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import HomePageBody from "./body/index-page-body"

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

  return (
    <Layout>
      <Seo />
      <HomePageBody
        carouselItems={frontmatter.carouselItems}
      />
    </Layout>
  )
}

export default HomePage
