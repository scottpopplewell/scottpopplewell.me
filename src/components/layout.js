import * as React from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (!isRootPath) {
    header = (
      <header className="global-header">
        <Link className="header-link-home" to="/">{title}</Link>
      </header>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      {header}
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
