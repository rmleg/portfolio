import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"

const About = props => {
  return (
    <div id="about">
      <div id="profile-picture">
        <Img
          fluid={props.img}
          alt="Rachel sitting on a boulder in front of Lake Erie, wearing a sweater and jeans."
        />
      </div>
      <div id="about-text">
        <h1>Rachel Leggett</h1>
        <p>
          Hi, I'm Rachel!{" "}
          <span role="img" aria-label="hand waving">
            👋
          </span>{" "}
          I'm a web developer in beautiful Ann Arbor, MI.
        </p>
        <p>
          I work on the core engineering team at{" "}
          <a
            href="https://shopify.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Shopify
          </a>
          , using Rails, GraphQL, and React.
        </p>
        <p>
          Previously, I've worked on accessibility at Domino's and on internal
          tools for faculty and staff at the University of Michigan.
        </p>
        <p>
          I own a knitting pattern design business called{" "}
          <a
            href="https://arbortwist.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Arbor Twist
          </a>
          . I teach classes about gauge and sock knitting at my local yarn
          store. I build online tools for knitters.
        </p>
        <p>
          I pole dance, I have four cats, and my favorite TV show is{" "}
          <cite>Buffy the Vampire Slayer</cite>.
        </p>
        <p>
          You can find me online at <Link to="/links">these other places</Link>.{" "}
          <span role="img" aria-label="northeast arrow">
            ↗️
          </span>
        </p>
      </div>
    </div>
  )
}

export default About
