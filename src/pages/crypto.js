import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Sidebar from '../components/Sidebar'
import styles from '../styles/crypto.module.sass'

const Crypto = ({ location, data }) => (
  <Layout location={location} title="Crypto">
    <SEO title="Crypto" />
    <div className={styles.crypto}>
      <Sidebar />
      <div className={styles.content}>
        <h2 className={styles.content__header}>The Internet of Value</h2>
        <h4 className={styles.content__subHeader}>Why Crypto Still Matters </h4>
        <br />
        <blockquote>
          The Internet is a tidal wave. It changes the rules.
          <br />
          <br />
          -Bill Gates,{' '}
          <a
            href="http://www.lettersofnote.com/2011/07/internet-tidal-wave.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            1995 Internal Microsoft Memo
          </a>
        </blockquote>
        <p>
          So far the impact of the internet has been largely a revolution in
          entertainment. It has never been easier to watch compelling tv shows,
          send funny memes to friends, or play immersive multiplayer games. But
          the web‘s potential is far greater than just providing better and
          better ways to escape reality. We can take the massive processing
          power and ubiquity of the web and focus it on making the real world less
          stressful. And there is no bigger source of stress for people today
          than money.
        </p>
        <p>
          Money today resides in a hodgepodge of fragmented services: bank
          accounts, credit cards, digital wallets — none of which can talk to
          each other. Worse yet, the institutions that safegaurd our money are
          incentivized to entrench this system, keeping our assets captive
          through bad UX and hidden fees. When we do want to move our money, it
          must be routed through a maze of middlemen who each take a cut. It
          shouldn't have to be like this.
        </p>
        <p>
          Cryptocurrencies turns those siloed data sources into a simple pair of
          cryptographic strings: a public address to receive and store money in
          and a private key to authenticate ownership of that money. Money is
          exchanged over public networks that anyone can interface with. Money
          becomes another building block for developers to build on top of.
          Power will shift to the user, who can move their money on their terms
          and at significantly lowered cost.
        </p>
        <p>
          While the past 2 decades of the web have focused on the Internet of
          Content, its next chapter will be the Internet of Value.
        </p>
        <div className={styles.lineBreak}>
          <span>•</span>
          <span>•</span>
          <span>•</span>
        </div>
        <p>
          While crypto is still in its early days, I am excited to learn and
          document its progress. Most notably, I have explored what exactly{' '}
          <Link to="/marc-andreessens-original-sin">internet-native money</Link> means,{' '}
          <Link to="/3-reads-marc-andreessens-original-sin">the microeconomics </Link>of decentralized
          protocols, and <Link to="/3-reads-marc-andreessens-original-sin">the tension </Link>between the crypto
          and fintech ecosystems. See below for a full archive of my posts about
          crypto.
        </p>
        <div className={styles.articleSection}>
          <h3>Crypto Archive</h3>
          <ul>
            <li>
              <Link to="/marc-andreessens-original-sin">
                Marc Andreessen’s Original Sin
              </Link>
            </li>
            <li>
              <Link to="/3-reads-marc-andreessens-original-sin">
                3 Reads: Marc Andreessen’s Original Sin
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

export default Crypto
