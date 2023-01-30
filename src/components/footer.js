/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import {
  RiFacebookBoxFill,
  RiTwitterFill,
  RiLinkedinBoxFill,
  RiYoutubeFill,
  RiInstagramFill,
  RiRssFill,
  RiGithubFill,
  RiTelegramFill,
  RiPinterestFill,
  RiSnapchatFill,
  RiSkypeFill,
  RiDribbbleFill,
  RiMediumFill,
  RiBehanceFill,
} from "react-icons/ri"
import { FaTiktok, FaWordpress, FaVk } from "react-icons/fa"
import Icons from "../util/socialmedia.json"
import Logo from "./logo"

const query = graphql`
  query FooterQuery {
    site {
      siteMetadata {
        siteTitle: title
      }
    }
  }
`

const Footer = () => {
  const { site} = useStaticQuery(query)
  const { siteTitle } = site.siteMetadata

  const sIcons = Icons.socialIcons.map((icons, index) => {
    return (
      <div>
        {icons.icon === "facebook" ? (
          <a href={icons.url} target="_blank" aria-label="link to Facebook" rel="noopener noreferrer">
            <RiFacebookBoxFill alt="Facebook icon"/>
          </a>
        ) : (
          ""
        )}
        {icons.icon === "twitter" ? (
          <a href={icons.url} target="_blank" aria-label="link to Twitter" rel="noopener noreferrer">
            <RiTwitterFill alt="Twitter icon"/>
          </a>
        ) : (
          ""
        )}
        {icons.icon === "linkedin" ? (
          <a href={icons.url} target="_blank" aria-label="link to Linkedin" rel="noopener noreferrer">
            <RiLinkedinBoxFill alt="Linkedin icon"/>
          </a>
        ) : (
          ""
        )}
        {icons.icon === "youtube" ? (
          <a href={icons.url} target="_blank" aria-label="link to Youtube" rel="noopener noreferrer">
            <RiYoutubeFill alt="Youtube icon" />
          </a>
        ) : (
          ""
        )}
        {icons.icon === "instagram" ? (
          <a href={icons.url} target="_blank" aria-label="link to Instagram" rel="noopener noreferrer">
            <RiInstagramFill alt="Instagram icon" />
          </a>
        ) : (
          ""
        )}
        {icons.icon === "rss" ? (
          <a href={icons.url} target="_blank" aria-label="link to RSS" rel="noopener noreferrer">
            <RiRssFill alt="RSS icon" />
          </a>
        ) : (
          ""
        )}
        {icons.icon === "github" ? (
          <a href={icons.url} target="_blank" aria-label="link to Github" rel="noopener noreferrer">
            <RiGithubFill alt="Github icon" />
          </a>
        ) : (
          ""
        )}
        {icons.icon === "telegram" ? (
          <a href={icons.url} target="_blank" aria-label="link to Telegram" rel="noopener noreferrer">
            <RiTelegramFill alt="Telegram icon" />
          </a>
        ) : (
          ""
        )}
        {icons.icon === "pinterest" ? (
          <a href={icons.url} target="_blank" aria-label="link to Pinterest" rel="noopener noreferrer">
            <RiPinterestFill alt="Pinterest icon" />
          </a>
        ) : (
          ""
        )}
        {icons.icon === "snapchat" ? (
          <a href={icons.url} target="_blank" aria-label="link to Snapchat" rel="noopener noreferrer">
            <RiSnapchatFill alt="Snapchat icon" />
          </a>
        ) : (
          ""
        )}
        {icons.icon === "skype" ? (
          <a href={icons.url} target="_blank" aria-label="link to Skype" rel="noopener noreferrer">
            <RiSkypeFill alt="Skype icon" />
          </a>
        ) : (
          ""
        )}
        {icons.icon === "wordpress" ? (
          <a href={icons.url} target="_blank" aria-label="link to Wordpress" rel="noopener noreferrer">
            <FaWordpress alt="Wordpress icon" />
          </a>
        ) : (
          ""
        )}
        {icons.icon === "tiktok" ? (
          <a href={icons.url} target="_blank" aria-label="link to Wordpress" rel="noopener noreferrer">
            <FaTiktok alt="tiktok icon" />
          </a>
        ) : (
          ""
        )}
        {icons.icon === "dribbble" ? (
          <a href={icons.url} target="_blank" aria-label="link to Dribbble" rel="noopener noreferrer">
            <RiDribbbleFill alt="Dribbble icon" />
          </a>
        ) : (
          ""
        )}
        {icons.icon === "medium" ? (
          <a href={icons.url} target="_blank" aria-label="link to Medium" rel="noopener noreferrer">
            <RiMediumFill alt="Medium icon" />
          </a>
        ) : (
          ""
        )}
        {icons.icon === "behance" ? (
          <a href={icons.url} target="_blank" aria-label="link to Behance" rel="noopener noreferrer">
            <RiBehanceFill alt="Behance icon" />
          </a>
        ) : (
          ""
        )}
        {icons.icon === "vk" ? (
          <a href={icons.url} target="_blank" aria-label="link to vk" rel="noopener noreferrer">
            <FaVk alt="vk icon" />
          </a>
        ) : (
          ""
        )}
      </div>
    )
  })
  
  return (
    <footer className="footer has-text-white-ter is-background-secondary-dark">
          <div className="container is-fullhd has-text-white-ter mrb-footer-container">
            <div className="columns is-variable is-8">
              <div className="column is-4">
                <Logo title={siteTitle} />
                <p className="is-max-width-2 pt-3">
                  Kochamy nieruchomości oraz pracę związaną z nimi. 
                </p>
              </div>
              <div className="column is-3">
                <h4 className="has-text-weight-semibold is-size-5">Podstrony</h4>
                <section className="menu mrb-menu">
                  <ul className="menu-list">
                    <li>
                      <Link to="/" className="navbar-item">
                        Strona główna
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/about">
                        O Nas
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/services">
                        Usługi
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/blog">
                        Aktualności
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contact">
                        Kontakt
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>

              <div className="column is-3">
                <h4 className="has-text-weight-semibold is-size-5">Informacje</h4>
                <section className="menu mrb-menu">
                  <ul className="menu-list">
                    <li>
                      <a
                        className="navbar-item"
                        href="/admin/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Admin
                      </a>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-2">
                <h4 className="has-text-weight-semibold is-size-5">Obserwuj nas</h4>
                <div className="mrb-socials">
                  {sIcons}
                </div>
              </div>
            </div>
          </div>
    </footer>
  )
}

export default Footer
