/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { RiArrowRightLine, RiArrowLeftLine } from "react-icons/ri"
import Content from "../../components/content"

const styles = {
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

const PostBody = ({title, image, previous, next, content, contentComponent}) => {
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

export default PostBody;