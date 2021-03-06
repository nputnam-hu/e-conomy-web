import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import SEO from '../components/seo'
import styles from '../styles/index.module.sass'
import Sidebar from '../components/Sidebar'

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="E-conomy: a publication on crypto, fintech, and the future" />
      <div className={styles.index}>
        <Sidebar />
        <div className={styles.mainContent}>
          <h1>Essays on cyber space and cyber problems</h1>
          <p className={styles.mainContent__paragraph}>
            E-conomy is an exploration of the future of the internet and the hackers, designers, and entrepreneurs building it.
          </p>
          <div style={{ height: 15 }} />
          <div className={styles.articleSection}>
            <h3>Latest</h3>
            <ul>
              <li>
                <Link to="/3-reads-marc-andreessens-original-sin">3 Reads: Marc Andreessen’s Original Sin</Link>
              </li>
            </ul>
          </div>
          <div className={styles.articleSection}>
            <h3>Notable</h3>
            <ul>
              <li>
                <Link to="/marc-andreessens-original-sin">
                  Marc Andreessen’s Original Sin
                </Link>
              </li>
              <li>
                <Link to="/the-creator-middle-class">
                  The Creator Middle Class
                </Link>
              </li>
              <li>
                <Link to="/the-economy-of-bits">The Economy of Bits</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
