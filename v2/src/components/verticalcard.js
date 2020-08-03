import React from "react"
import { Link } from "gatsby"

const VerticalCard = props => {
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
    <div className="vertical-card">
      {title}
      <img src={props.img} alt={props.altText} />
      <p dangerouslySetInnerHTML={{ __html: props.description }} />
    </div>
  )
}

export default VerticalCard
