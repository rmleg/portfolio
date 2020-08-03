import React from "react"
import { Link } from "gatsby"
import "../styles/nav.scss"

const Nav = props => {
  return (
    <nav
      className={props.hidden}
      onClick={props.onclick}
      onKeyUp={e => props.onkey(e)}
    >
      <a href="#about-me">About</a>
      <a href="#speaking">Speaking</a>
      <a href="#projects">Projects</a>
      <a href="https://devyarns.com" target="_blank" rel="noopener noreferrer">
        Blog
      </a>
      <Link to="/links">Links</Link>
    </nav>
  )
}

export default Nav
