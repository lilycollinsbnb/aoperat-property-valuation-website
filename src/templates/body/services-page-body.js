import React from "react"
import { Link } from "gatsby"
import ImageRightSection from "../../components/image-right-section"
import Content from "../../components/content.js";


const ServicesPageBody = ({ title, subheading, image, listSectionTitle, listItems, contactSectionTitle, contactSectionText, content, contentComponent }) => {
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

export default ServicesPageBody;