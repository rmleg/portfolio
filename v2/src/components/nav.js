import React from "react"
import { Link } from "gatsby"
import "../styles/nav.scss"

const Nav = props => {
  return (
    <nav className={props.hidden} onClick={props.onclick}>
      <Link to="/">Home</Link>
      <a href="https://devyarns.com" target="_blank" rel="noopener noreferrer">
        Blog
      </a>
      <Link to="/links">Links</Link>
    </nav>
  )
}

export default Nav
