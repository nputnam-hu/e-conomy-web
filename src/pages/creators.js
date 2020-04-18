import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Sidebar from '../components/Sidebar'
import styles from '../styles/crypto.module.sass'

const Creators = ({ location, data }) => (
  <Layout location={location} title="Creators">
    <SEO title="Creators" />
    <div className={styles.crypto}>
      <Sidebar />
      <div className={styles.content}>
        <h2 className={styles.content__header}>10,000 True Fans</h2>
        <h4 className={styles.content__subHeader}>
          A New Model for Creative Production
        </h4>
        <br />
        {/* <p>
          It has been over a decade since the publication of the Bitcoin white
          paper and the state of cryptocurrencies is still uncertain. While
          Bitcoin and other coins have appreciated signficantly in value, the
          majority of that
        </p> */}
        {/* Cryptocurrencies enable money to be native to the internet. Forget{' '}
          <a href="https://bananacoin.io/">bannacoin</a>. Forget{' '}
          <a href="https://www.pcmag.com/news/kodak-says-hold-my-beer-with-odd-cryptocurrency-bid">
            KodakCoin
          </a>
          . Forget <a href="https://dogecoin.com/">dogecoin</a> (please...).
          Internet native money is the killer app for crypto; it's the "there
          there".  */}
        <blockquote>
          The Internet is a tidal wave. It changes the rules.
          <br />
          <br />
          -Bill Gates,{' '}
          <a href="http://www.lettersofnote.com/2011/07/internet-tidal-wave.html">
            1995 Internal Microsoft Memo
          </a>
        </blockquote>
        <div className={styles.lineBreak}>
          <span>•</span>
          <span>•</span>
          <span>•</span>
        </div>
        <p>
          While crypto is still in its early days, I am excited to learn and
          document its progress. Most notably, I have explored what exactly{' '}
          <Link to="/about">internet-native money</Link> means,{' '}
          <Link to="/about">the microeconomics </Link>of decentralized
          protocols, and <Link to="/about">the tension </Link>between the crypto
          and fintech ecosystems. See below for a full archive of my posts about
          creators.
        </p>
        <div className={styles.articleSection}>
          <h3>Creators Archive</h3>
          <ul>
            <li>
              <Link to="/why-I-left-substack">Why I Left Substack</Link>
            </li>
            <li>
              <Link to="/about">The Creator Middle Class</Link>
            </li>
            <li>
              <Link to="/about">The Economy of Bits</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </Layout>
)

export const pageQuery = graphql`
  query {
    dollar: file(relativePath: { eq: "dollar.jpg" }) {
      childImageSharp {
        fixed(width: 800, height: 600) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default Creators
