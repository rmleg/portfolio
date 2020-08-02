import React from 'react'
import '../styles/linkForList.scss'

const LinkForList = (props) => {
    return (
        <a className="linkForList" href={props.url}>{props.title}</a>
    )
}

export default LinkForList