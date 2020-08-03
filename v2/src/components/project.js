import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

const Project = props => {
  let title = <h3>{props.title}</h3>
  if (props.link === "true") {
    title = (
      <h3>
        <Link to={props.url}>{props.title}</Link>
      </h3>
    )
  } else if (props.link === "false" && props.url) {
    title = (
      <h3>
        <a href={props.url}>{props.title}</a>
      </h3>
    )
  }

  return (
    <div className="project">
      <div className="description">
        {title}
        <p className="project-tags">{props.tags}</p>
        <p dangerouslySetInnerHTML={{ __html: props.description }} />
      </div>
      <div className="screenshot">
        <Img alt={props.altText} fluid={props.img} />
      </div>
    </div>
  )
}

export default Project
