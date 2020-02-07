import React from "react"
import { Link, graphql } from "gatsby"
import Img from 'gatsby-image'

import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from '../styles/index.module.sass'
// import MailchimpButton from "../components/MailchimpButton"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="E-conomy: a monthly zine on crypto, fintech, and the future" />
      <div className={styles.index}>
        <Img
          fixed={data.logo.childImageSharp.fixed}
          className={styles.index__logo}
        />
        <h2 className={styles.index__header}>A zine on cyberspace and cyber problems.</h2>
        <h2 className={styles.index__subheader}> Subscribe to be emailed our monthly issue:</h2>
        {/* <MailchimpButton /> */}
        <div className={styles.latestIssue}>
          <div className={styles.latestIssue__text}>
            <h3>Latest Issue</h3>
            <h1>Identity</h1>
          </div>
          <Link to="/issue/1">
            <Img
              fixed={data.issue1.childImageSharp.fixed}
              className={styles.latestIssue__cover}
            />
          </Link>
        </div>
        <hr className={styles.linebreak} />
        <div className={styles.archive}>
          <h2 className={styles.archive__header}>Archive</h2>
          <div className={styles.archive__issues}>
            <div className={styles.issue}>
              <Link to="/issue/1">
                <Img
                  className={styles.issue__cover}
                  fixed={data.issue1__small.childImageSharp.fixed}
                />
              </Link>
              <h3 className={styles.issue__title}>Identity</h3>
              <span className={styles.issue_issueNumber}>Issue 1</span>
            </div>
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
    logo: file(relativePath: { eq: "logo__large.png" }) {
      childImageSharp {
        fixed(width: 250, height: 250) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    issue1: file(relativePath: { eq: "issue1.png" }) {
      childImageSharp {
        fixed(width: 462, height: 598) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    issue1__small: file(relativePath: { eq: "issue1.png" }) {
      childImageSharp {
        fixed(width: 200, height: 258) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
