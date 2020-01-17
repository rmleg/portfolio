import React from "react"

export default props => (
  <div className="project">
    <div className="description">
      <h3 dangerouslySetInnerHTML={{ __html: props.title }} />
      <p className="project-tags">{props.tags}</p>
      <p dangerouslySetInnerHTML={{ __html: props.description }} />
    </div>
    <div className="screenshot">
      <img src={props.img} alt={props.altText} />
    </div>
  </div>
)
