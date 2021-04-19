import React from "react"
import Footer from "../components/footer"
import Project from "../components/project"
import MyHelment from "../components/helmet"
import Menu from "../components/menu"
import About from "../components/about"
import Speaking from "../components/speaking"
// import FunProjects from "../components/funProjects"
import { graphql } from "gatsby"
import Blogs from "../components/blogs"

export default props => {
  return (
    <div>
      <MyHelment />
      <div className="container">
        <header>
          <Menu />
        </header>
        <main>
          <About img={props.data.profilePic.childImageSharp.fluid} />
          <Speaking />
          <Blogs
            images={{
              arborTwistBlog: props.data.arborTwistBlog.childImageSharp.fluid,
              devYarnsBlog: props.data.devYarnsBlog.childImageSharp.fluid,
            }}
          />
          {/* <FunProjects /> */}
          <div id="projects" className="blue-section">
            <div className="content">
              <h2>Selected Projects</h2>
              <p>Here are a couple projects I am proud of.</p>
              <Project
                title="Knitting Recipes"
                url="https://knittingrecipes.com"
                link="false"
                tags="React | Sass | Bootstrap | Netlify | Personal Project"
                description='<p>This <em>React</em> application allows knitters to generate hat
                  and sock knitting patterns based on their own custom measurements
                  and stitch size (called "gauge"). In addition to using the sock
                  pattern generator in the Classic Cuff Down Socks class I teach 2-3
                        times a year, upwards of 50 users per week use this application.</p>
                        <p>I recently started <a href="https://www.youtube.com/channel/UCXLBncunjUQMO6HlxSRxewA">a YouTube channel</a>
                         where I am documenting the
                         process of auditing Knitting Recipes for accessibility and fixing the bugs I find.</p>'
                img={props.data.knittingRecipes.childImageSharp.fluid}
                altText="Screenshot of Knitting Recipes homepage."
              />

              <Project
                title="Software Management Interface"
                tags="Python | Flask | MySQL | JavaScript | University of Michigan"
                description={`<p>This <em>Flask</em> application provides an interface to
                  facilitate the U-M College of Engineering Student Computing Environment team's
                  process for software evaluation, licensing, and deployment, as
                  well as populating a public software listing webpage. As the lead
                  developer of this ongoing project, I collaborated with business
                  analysts, project managers, and project owners to gather
                  functional and business requirements.</p>
                  <p>In 2020, I tripled the 
                  Lighthouse performance score for this 
                  application through a combination of refactoring the backend 
                  and optimizing the frontend.</p>`}
                img={props.data.smi.childImageSharp.fluid}
                altText="Screenshot of software listing homepage."
              />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  )
}

export const pageQuery = graphql`
  query images {
    profilePic: file(relativePath: { eq: "RachelLeggettProfilePhoto.png" }) {
      childImageSharp {
        fluid(maxWidth: 675) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    knittingRecipes: file(relativePath: { eq: "knittingrecipeshomepage.png" }) {
      childImageSharp {
        fluid(maxWidth: 675) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    smi: file(relativePath: { eq: "smihomepage.png" }) {
      childImageSharp {
        fluid(maxWidth: 675) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    eerHomepage: file(relativePath: { eq: "eerhomepage.png" }) {
      childImageSharp {
        fluid(maxWidth: 675) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    arborTwistBlog: file(relativePath: { eq: "arbortwistblogscreenshot.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    devYarnsBlog: file(relativePath: { eq: "devyarnsscreenshot.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
