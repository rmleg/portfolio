import React from "react"
import { Link } from "gatsby"
import "../styles/nav.scss"

const Nav = props => {
  return (
    <div role="dialog">
      <nav
        className={props.hidden + " menu-links"}
        onClick={props.onclick}
        onKeyUp={e => props.onkey(e)}
        aria-hidden={props.hidden === "closed" ? "true" : null}
      >
        <a href="#about">About</a>
        <a href="#speaking">Speaking</a>
        <a href="#writing">Writing</a>
        <a href="#projects">Projects</a>
        <a
          href="https://devyarns.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Blog
        </a>
        <Link to="/links">External Links</Link>
      </nav>
    </div>
  )
}

export default Nav
