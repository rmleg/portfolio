import React from "react"
import { Link } from "gatsby"

const Nav = (props) => {
  return (
    <nav className={props.hidden}>
      <Link to="/">Home</Link>
      <a href="https://devyarns.com" target="_blank" rel="noopener noreferrer">
        Blog
      </a>
      <Link to="/links">My Other Internet Places</Link>
    </nav>
  )
}

export default Nav
