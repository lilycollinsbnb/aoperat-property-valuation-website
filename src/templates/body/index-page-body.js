/** @jsx jsx */
import { jsx } from "theme-ui"
import BlogListHome from "../../components/blog-list-home"
import Carousel from "../../components/carousel"

const HomePageBody = ({carouselItems}) => {

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

export default HomePageBody;