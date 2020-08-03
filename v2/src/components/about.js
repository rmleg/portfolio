import React from "react"
import ProfilePic from "../images/RachelLeggettProfilePhoto.png"
import { Link } from "gatsby"

const About = () => {
  return (
    <div id="about-me">
      <div id="profile-picture">
        <img
          src={ProfilePic}
          alt="Photo of Rachel sitting on a boulder in front of Lake Erie, wearing a sweater and jeans."
        />
      </div>
      <div id="about-text">
        <h1>Rachel Leggett</h1>
        <p>
          Hi, I'm Rachel! 👋 I work at{" "}
          <a
            href="https://engin.umich.edu"
            target="_blank"
            rel="noopener noreferrer"
          >
            Michigan Engineering
          </a>{" "}
          as a Senior Full-Stack Web Developer in beautiful Ann Arbor, Michigan.
          I work with Python, Flask, PHP, Phalcon, JavaScript, React, Vue, and
          MySQL, specializing in a11y.
        </p>
        <p>
          I also own a knitting pattern design business called{" "}
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
          I pole dance, I have four cats, and my favorite TV show is Buffy the
          Vampire Slayer.
        </p>
        <p>
          You can find me online at <Link to="/links">these other places</Link>.{" "}
          ↗️
        </p>
      </div>
    </div>
  )
}

export default About
