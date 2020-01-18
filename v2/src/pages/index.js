import React from "react"
import knittingrecipesimg from "../images/knittingrecipeshomepage.png"
import smiimg from "../images/smihomepage.png"
import eerimg from "../images/eerhomepage.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "../utils/fontawesome"
import Footer from "../components/footer"
import Project from "../components/project"
import MyHelment from "../components/helmet"

export default () => (
  <div>
    <MyHelment />
    <div className="container">
      <header>
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
      </header>
      <main>
        <div id="about-me">
          <p>
            Hi! I'm Rachel, a web applications developer with nine years of
            experience delivering high-quality web solutions to higher education
            clients.
          </p>
          <p>
            I'm especially skilled in <em>JavaScript</em> (and <em>React</em>),{" "}
            <em>Python</em> (and <em>Flask</em>), and <em>WordPress</em>{" "}
            development. I'm passionate about mentoring, effective
            communication, and project management to create happy, productive
            cross-functional teams.
          </p>
        </div>
        <div id="projects">
          <h2>Selected Projects</h2>
          <Project
            title="Knitting Recipes"
            url="https://knittingrecipes.com"
            link="false"
            tags="React | Sass | Bootstrap | Netlify | Personal Project"
            description='This <em>React</em> application allows knitters to generate hat
                  and sock knitting patterns based on their own custom measurements
                  and stitch size (called "gauge"). In addition to using the sock
                  pattern generator in the Classic Cuff Down Socks class I teach 2-3
                        times a year, upwards of 50 users per week use this application.'
            img={knittingrecipesimg}
            altText="Screenshot of Knitting Recipes homepage."
          />

          <Project
            title="Software Management Interface"
            url="smi"
            link="true"
            tags="Python | Flask | MySQL | JavaScript | University of Michigan"
            description="This <em>Flask</em> application provides an interface to
                  facilitate the U-M College of Engineering Student Computing Environment team's
                  process for software evaluation, licensing, and deployment, as
                  well as populating a public software listing webpage. As the lead
                  developer of this ongoing project, I collaborated with business
                  analysts, project managers, and project owners to gather
                  functional and business requirements. I continue to work with
                  project owners and a team of part-time student employees to
                  develop features in annual development cycles of about four
                        months."
            img={smiimg}
            altText="Screenshot of software listing homepage."
          />

          <Project
            title="Web Publishing WordPress Theme"
            tags="WordPress | PHP | Sass | Bootstrap | University of Michigan"
            description="As manager of the U-M College of Engineering IT department's Web
                  Publishing service, I lead development on themes and plugins
                  offered to the service's 300+ faculty, lab, center, and academic
                  department users. In 2019, I collaborated with a UX designer in
                  Engineering's Communications and Marketing department to develop a
                  new theme based on the designer's mockups."
            img={eerimg}
            altText="Screenshot of a WordPress theme."
          />
        </div>
      </main>
      <Footer />
    </div>
  </div>
)
