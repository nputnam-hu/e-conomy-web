import React from 'react'
import { Link, graphql } from 'gatsby'

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
          <h1>Contact Me</h1>
          <p className={styles.mainContent__paragraph}>
            One of the primary reasons I publish my ideas online is so that I
            can meet interesting people who have their own ideas. Feel free to
            DM me on{' '}
            <a
              href="https://twitter.com/noah_putnam"
              target="_blank"
              rel="noopener noreferrer"
            >
              twitter
            </a>
            , or email me at noahputnam [at] gmail [dot] com, with comments on
            my writing, questions or criticisms, or writing/ideas of your own. I
            always enjoy getting messages, and almost always reply.
          </p>
          <p className={styles.mainContent__paragraph}>
            In addition, and am pretty much always down to get coffee with
            someone interested in crypto, the creator economy, or really
            anything tech related. I live in New York City (Lower East Side) and
            travel around the US fairly often.
          </p>
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
