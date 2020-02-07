import React from "react"
import { Link, graphql } from "gatsby"
import Img from 'gatsby-image'

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import styles from '../../styles/issue1.module.sass'

const BlogIndex = ({ data, location }) => {
    const siteTitle = data.site.siteMetadata.title

    return (
        <Layout location={location} title={siteTitle}>
            <SEO title="Identity | Issue One of E-conomy" />
            <div className={styles.issue1}>
                <Img
                    fixed={data.cover.childImageSharp.fixed}
                    className={styles.issue1__cover}
                />
                <hr className={styles.linebreak} />
                <div className={styles.otherIssues}>
                    <h2 className={styles.otherIssues__header}>Other Issues</h2>
                    <div className={styles.otherIssues__issues}>
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
    cover: file(relativePath: { eq: "issue1.png" }) {
      childImageSharp {
        fixed(width: 600, height: 776) {
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
