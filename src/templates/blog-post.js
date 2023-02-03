/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { RiArrowRightLine, RiArrowLeftLine } from "react-icons/ri"
import Content, { HTMLContent } from "../components/content"
import Layout from "../components/layout"
import Seo from "../components/seo"

const styles = {
  "article blockquote": {
    "background-color": "cardBg",
  },
  pagination: {
    a: {
      color: "muted",
      "&.is-active": {
        color: "text",
      },
      "&:hover": {
        color: "text",
      },
    },
  },
}

const Pagination = props => (
  <div className="pagination -post" sx={styles.pagination}>
    <ul>
      {props.previous && props.previous.frontmatter.template === "blog-post" && (
        <li>
          <Link to={props.previous.frontmatter.slug} rel="prev">
            <p
              sx={{
                color: "muted",
              }}
            >
              <span className="icon -left">
                <RiArrowLeftLine />
              </span>{" "}
              Poprzedni
            </p>
            <span className="page-title">
              {props.previous.frontmatter.title}
            </span>
          </Link>
        </li>
      )}
      {props.next && props.next.frontmatter.template === "blog-post" && (
        <li>
          <Link to={props.next.frontmatter.slug} rel="next">
            <p
              sx={{
                color: "muted",
              }}
            >
              Następny{" "}
              <span className="icon -right">
                <RiArrowRightLine />
              </span>
            </p>
            <span className="page-title">{props.next.frontmatter.title}</span>
          </Link>
        </li>
      )}
    </ul>
  </div>
)

export const PostTemplate = ({title, image, previous, next, content, contentComponent}) => {
  let props = {
    previous,
    next,
  }

  const PostContent = contentComponent || Content;
  
  return (
    <div className="container content mrb-blog-container">
        <div className="columns">
          <div className="column is-8 is-offset-2">
            <header className="featured-banner">
              {image ? (
                image?.url ?
                <img
                src={image}
                objectFit={"cover"}
                style={{
                  // You can set a maximum height for the image, if you wish.
                  width:"100%",
                  maxHeight:"400px"
                }}
                className="mrb-blog-thumbg"
                // You can optionally force an aspect ratio for the generated image
                aspectratio={3 / 1}
                // This is a presentational image, so the alt should be an empty string
                alt=""
                formats={["auto", "webp", "avif"]}
                />:
                <GatsbyImage
                  image={image}
                  alt={""}
                  style={{
                    // You can set a maximum height for the image, if you wish.
                    width:"100%",
                    maxHeight:"400px"
                  }}
                  aspectratio={3 / 1}
                  layout="fullWidth"
                  objectFit={"cover"}
                />
              ) : (
                ""
              )}
            </header>
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light is-color-primary-green">
              {title}
            </h1>

            <section>
            <PostContent content={content} />
            </section>
            <section>
            {(previous || next) && <Pagination {...props} />}
            </section>
          </div>
        </div>
      </div>
  )
}

const Post = ({ data, pageContext }) => {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html, excerpt } = markdownRemark

  const Image = frontmatter.featuredImage
    ? frontmatter.featuredImage.childImageSharp.gatsbyImageData
    : ""
  const { previous, next } = pageContext

  return (
    <Layout className="page">
      <Seo
        title={frontmatter.title}
        description={
          frontmatter.description ? frontmatter.description : excerpt
        }
        image={Image}
        article={true}
      />
      <PostTemplate 
        title={frontmatter.title}
        image={Image}
        previous={previous}
        next={next}
        content={html}
        contentComponent={HTMLContent}
      />
    </Layout>
  )
}

export default Post

export const pageQuery = graphql`
  query BlogPostQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      excerpt(pruneLength: 148)
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        description
        featuredImage {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`
