import React from "react"
import VerticalCard from "./verticalcard"
import "../styles/verticalcards.scss"

const Blogs = props => {
  return (
    <div id="writing" className="white-section">
      <div className="content">
        <h2>Writing</h2>
        <p>
          I have two fledgling blogs after taking an eight-year break from
          blogging. None of that old content is available, to everyone's relief.
        </p>
        <div className="vertical-card-container">
          <VerticalCard
            title="DevYarns"
            url="https://devyarns.com"
            description="Technical blog with a focus on web development and accessibility."
            img={props.images.devYarnsBlog}
            altText="Screenshot of the DevYarns homepage."
          />
          <VerticalCard
            title="Arbor Twist Blog"
            url="https://arbortwist.com/blog"
            description="Knitting and knitting pattern design blog."
            img={props.images.arborTwistBlog}
            altText="Screenshot of the Arbor Twist Blog homepage."
          />
        </div>
      </div>
    </div>
  )
}

export default Blogs
