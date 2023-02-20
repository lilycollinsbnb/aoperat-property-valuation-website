import React from "react"
import {Link } from "gatsby"

import ImageRightSection from "../../components/image-right-section"
import Content from "../../components/content.js";

const AboutPageBody = ({title, subheading, image, content, contentComponent}) => {
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

export default AboutPageBody;