import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'

import Content, { HTMLContent } from '../../components/Content'
import Layout from '../../components/layout'
import Time from '../../components/Time'
import ReducedSidebar from './ReducedSidebar'
import styles from './styles.module.sass'
import moment from 'moment'

export class BlogPostTemplate extends Component {
  state = {
    scrollHeight: 0,
    pageUrl: '',
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
    // eslint-disable-next-line react/no-did-mount-set-state
    this.setState({ pageUrl: window.location.href })
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }
  handleScroll = () => {
    this.setState({
      scrollHeight:
        window.scrollY /
        (document.getElementById('article-container').scrollHeight -
          window.innerHeight),
    })
  }
  render() {
    const {
      htmlBody,
      contentComponent,
      helmet,
      subtitle,
      title,
      publishDate,
    } = this.props
    const PostContent = contentComponent || Content
    const formattedPublishDate = moment(publishDate).format('MMMM Do YYYY')

    return (
      <>
        {helmet || ''}
        <section id="article-container" className={styles.container}>
          <ReducedSidebar scrollHeight={this.state.scrollHeight} />
          <div className={styles.BlogPost}>
            {/* Blog Post Info */}
            <div className={styles.BlogPost__title}>{title}</div>
            <h2 className={styles.BlogPost__subtitle}>{subtitle}</h2>
            {/* Post Content Section */}
            <PostContent
              className={`${styles.BlogPost__content} ${styles.bodytext} ql-editor `}
              content={htmlBody}
            />
            {/* Tags Section */}
            {/* Article Footer */}
            <hr />
            <p className={styles.publishDate}>This article was published {formattedPublishDate}</p>
          </div>
        </section>
      </>
    )
  }
}
const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data
  const morePosts = data.allBlogPost
    ? data.allBlogPost.edges.map(p => p.node)
    : []
  const rootUrl = 'https://e-conomy.la'
  return (
    <Layout>
      <BlogPostTemplate
        htmlBody={post.html}
        contentComponent={HTMLContent}
        subtitle={post.frontmatter.subtitle}
        helmet={
          <Helmet titleTemplate="%s | E-conomy">
            <title>{`${post.frontmatter.title}`}</title>
            <meta name="description" content={`${post.subtitle}`} />
            <meta property="og:title" content={post.title} />
            <meta property="og:url" content={`${rootUrl}${post.fields.slug}`} />
            {post.frontmatter.ogImage && (
              <meta
                property="og:image"
                content={`${rootUrl}${post.frontmatter.ogImage.childImageSharp.sizes.src}`}
              />
            )}
            <meta charset="utf-8" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0"
            />
            <meta name="twitter:card" content="summary" />
            <meta property="og:type" content="article" />
            <meta property="og:locale" content="en_US" />
            <link rel="canonical" href={`${rootUrl}${post.fields.slug}`} />
          </Helmet>
        }
        coverPhoto={post.coverPhoto}
        tags={[]}
        title={post.frontmatter.title}
        publishDate={post.frontmatter.date}
        morePosts={morePosts}
      />
    </Layout>
  )
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        subtitle
        ogImage {
          childImageSharp {
            sizes(maxWidth: 1000) {
              src
            }
          }
        }
      }
    }
  }
`
