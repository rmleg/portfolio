import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "../utils/fontawesome"
import ProfilePic from "../images/RachelLeggettProfilePhoto.png"

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
        <span className="social">
          <a
            href="https://www.linkedin.com/in/rmleg/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit my LinkedIn profile."
          >
            <FontAwesomeIcon icon={["fab", "linkedin-in"]} className="grow" />
          </a>
          <a
            href="https://github.com/rmleg"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit my Github profile."
          >
            <FontAwesomeIcon icon={["fab", "github"]} className="grow" />
          </a>
          <a
            href="https://twitter.com/rleggos"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit my Twitter profile."
          >
            <FontAwesomeIcon icon={["fab", "twitter"]} className="grow" />
          </a>
        </span>
      </div>
    </div>
  )
}

export default About
