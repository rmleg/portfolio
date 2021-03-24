import React from "react"
import "../styles/linkForList.scss"

const LinkForList = props => {
  return (
    <li>
      <a className="linkForList" href={props.url}>
        {props.title}
      </a>
    </li>
  )
}

export default LinkForList
