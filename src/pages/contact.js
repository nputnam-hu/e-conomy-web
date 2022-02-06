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
            E-conomy is the personal website of me,{' '}
            <a href="htttps://twitter.com/noah_putnam">Noah Putnam</a>.

          </p>
          <p className={styles.mainContent__paragraph}>
            One of the primary reasons I publish my ideas online is so that I
            can meet interesting people who have their own ideas. My DMs are open on{' '}
            <a
              href="https://twitter.com/noah_putnam"
              target="_blank"
              rel="noopener noreferrer"
            >
              twitter
            </a>
            . Feel free to reach out with questions or criticisms of
            my writing, or writing/ideas of your own. I
            always enjoy getting messages, and almost always reply.
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
