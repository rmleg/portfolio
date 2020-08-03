import React from "react"
import VerticalCard from "../components/verticalcard"

import knittingrecipesimg from "../images/knittingrecipeshomepage.png"

import "../styles/funprojects.scss"

const FunProjects = () => {
  return (
    <div id="fun-projects">
      <h2>Just for Fun: Tools for Knitters</h2>
      <div id="fun-projects-container">
        <VerticalCard
          title="Knitting Recipes"
          url="https://knittingrecipes.com"
          link="false"
          description='This <em>React</em> application allows knitters to generate hat
                  and sock knitting patterns based on their own custom measurements
                  and stitch size (called "gauge"). In addition to using the sock
                  pattern generator in the Classic Cuff Down Socks class I teach 2-3
                        times a year, upwards of 50 users per week use this application.'
          img={knittingrecipesimg}
          altText="Screenshot of Knitting Recipes homepage."
        />
        <VerticalCard
          title="Knitting Recipes"
          url="https://knittingrecipes.com"
          link="false"
          description='This <em>React</em> application allows knitters to generate hat
                  and sock knitting patterns based on their own custom measurements
                  and stitch size (called "gauge"). In addition to using the sock
                  pattern generator in the Classic Cuff Down Socks class I teach 2-3
                        times a year, upwards of 50 users per week use this application.'
          img={knittingrecipesimg}
          altText="Screenshot of Knitting Recipes homepage."
        />
        <VerticalCard
          title="Knitting Recipes"
          url="https://knittingrecipes.com"
          link="false"
          description='This <em>React</em> application allows knitters to generate hat
                  and sock knitting patterns based on their own custom measurements
                  and stitch size (called "gauge"). In addition to using the sock
                  pattern generator in the Classic Cuff Down Socks class I teach 2-3
                        times a year, upwards of 50 users per week use this application.'
          img={knittingrecipesimg}
          altText="Screenshot of Knitting Recipes homepage."
        />
      </div>
    </div>
  )
}

export default FunProjects
