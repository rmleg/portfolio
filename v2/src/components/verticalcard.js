import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

const VerticalCard = props => {
  let title = props.title
  if (props.link === "true") {
    title = <Link to={props.url}>{props.title}</Link>
  } else if (
    (props.link === "false" || props.link === undefined) &&
    props.url
  ) {
    title = <a href={props.url}>{props.title}</a>
  }
  return (
    <div className="vertical-card">
      <Img fluid={props.img} alt={props.altText} />
      <h3>{title}</h3>
      <p dangerouslySetInnerHTML={{ __html: props.description }} />
      {props.url ? (
        <p>
          <a href={props.url} target="_blank" rel="noopener noreferrer">
            Take a look &rarr;
          </a>
        </p>
      ) : (
        ""
      )}
    </div>
  )
}

export default VerticalCard
