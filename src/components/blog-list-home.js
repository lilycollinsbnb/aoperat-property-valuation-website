import { Link } from "gatsby"
import { RiArrowDownLine, RiArrowRightSLine } from "react-icons/ri"
import React from 'react'
import PostCard from "./post-card"

export default function BlogListHome(props) {
  const data = props.data
  const posts = data.edges
    .filter(edge => !!edge.node.frontmatter.date)
    .map(edge => <PostCard key={edge.node.id} data={edge.node} />)
  return <PostMaker data={posts} />
}

const PostMaker = ({ data }) => (
  <div>
    <section className="home-posts">
      <div className="grids col-1 sm-2 lg-3">{data}</div>
      <div className="buttons is-centered">
            <Link className="button mrb-button mrb-button-light" to="/blog">
              Czytaj więcej
            </Link>
      </div>
    </section>
  </div>
)
