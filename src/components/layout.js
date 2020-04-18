import React from 'react'
import { Link } from 'gatsby'
import '../styles/global.sass'

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const header = (
    <h3>
      {/* <Link
        style={{
          boxShadow: `none`,
          textDecoration: `none`,
          color: `inherit`,
        }}
        to={`/`}
      >
        {title}
      </Link> */}
    </h3>
  )
  return (
    <div>
      {/* <Navbar /> */}
      <main>{children}</main>
      <footer></footer>
    </div>
  )
}

export default Layout
