import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import styles from './styles.module.sass'

const Navbar = () => (
  <StaticQuery
    query={graphql`
      query {
        logo: file(relativePath: { eq: "logo__small.png" }) {
          childImageSharp {
              fixed(width: 85, height: 86) {
                ...GatsbyImageSharpFixed
              }
            }
          }
          substack: file(relativePath: { eq: "substackLogo.png" }) {
            childImageSharp {
              fixed(width: 24, height: 29) {
                ...GatsbyImageSharpFixed
              }
            }
          }
          twitter: file(relativePath: { eq: "twitterLogo.png" }) {
            childImageSharp {
              fixed(width: 31, height: 31) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
        `}
    render={({ logo, substack, twitter }) => (
      <nav className={styles.navbar}>
        <div className={styles.navbar__content}>
          <Link to="/">
            <Img className={styles.navbar__logo} fixed={logo.childImageSharp.fixed} />
          </Link>
          <div className={styles.divider} />
          <a href="https://economyofbits.substack.com" target="_blank" rel="nooponener noreferer">
            <Img className={styles.navbar__socialIcon} fixed={substack.childImageSharp.fixed} />
          </a>
          <a href="https://twitter.com/e_dash_conomy" target="_blank" rel="nooponener noreferer">
            <Img className={styles.navbar__socialIcon} fixed={twitter.childImageSharp.fixed} /></a>
        </div>
      </nav>
    )}
  />
)

export default Navbar