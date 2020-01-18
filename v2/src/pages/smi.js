import React from "react"
import Layout from "../components/casestudylayout"
import { Link } from "gatsby"
import smiimg from "../images/smihomepage.png"
import Nav from "../components/nav"

export default () => (
  <Layout>
    <header>
      <Nav />
      <h1>Software Management Interface (SMI)</h1>
    </header>
    <main>
      <div className="case-study-intro">
        <p>
          An internal University of Michigan College of Engineering workflow
          tool used to develop and deploy a world-class student computing
          environment.
        </p>
        <img
          src={smiimg}
          alt="Screenshot of a new UI mockup for the public interface of the SMI application."
        />
      </div>

      <h2>Overview</h2>
      <p>
        This Flask application provides an interface to facilitate the U-M
        College of Engineering Student Computing Team's process for software
        evaluation, licensing, and deployment, as well as populating a public
        software listing webpage. As the lead developer of this ongoing project,
        I collaborated with business analysts, project managers, and project
        owners to gather functional and business requirements. I continue to
        work with project owners and a team of part-time student employees to
        develop features in annual development cycles of about four months. As
        the application ages, I am also focused on incrementally refactoring the
        code to better align with modern practices.
      </p>
      <p>
        Because this application is primarily an internal tool serving
        privileged data that is only available to logged-in users, I am unable
        to provide extensive details or views of the admin interface. However, I
        am happy to further discuss this project if you{" "}
        <a href="mailto:leggett.rachel@gmail.com">contact me directly</a>.
      </p>
      <h2>Challenge</h2>
      <p>
        The Student Computing Environment (SCE) Team is tasked with developing
        and deploying a world class computing environment for Michigan
        Engineering students. For years, the team has completed this incredibly
        involved annual process through a tangled network of spreadsheets,
        relying on institutional knowledge with no documented workflow. I was
        asked to lead the development of a web application the team could use to
        facilitate this process.
      </p>
      <h3>Goals</h3>
      <ol>
        <li>
          Document the team's workflow and build the application in such a way
          that knowledge of the workflow is not lost when employees leave the
          team.
        </li>
        <li>
          Replace brittle, confusing spreadsheets with a single database and a
          UI for interacting with the data.
        </li>
      </ol>
      <h2>Process</h2>
      <p>
        As lead developer on this project, I worked with a cross-functional team
        of highly talented professionals, such as:
      </p>
      <ul>
        <li>Internal business analysts</li>
        <li>Internal project managers</li>
        <li>External database architects</li>
      </ul>
      <p>
        The business analysts worked with the SCE Team to develop a process map,
        which took several months. Once the process map was complete, I was
        brought onto the team to participate in database design and to begin to
        build the application.
      </p>
      <p>
        This project was and continues to be run with an "Agile-like" project
        management methodology. I work with the SCE team to prioritize features,
        identify the effort level required for each feature, choose a set of
        features to work on during the four-month development cycle, and deploy
        new features to our QA server every two weeks for stakeholder review by
        the SCE team. For the first three years, our team worked with a
        dedicated project manager, but I now serve as both the PM and the lead
        developer.
      </p>
      <h2>Solution</h2>
      <h3>An Unfamiliar Tech Stack</h3>
      <p>
        Up until the point of this project's genesis in 2016, my primary role
        had been as my team's WordPress developer, which meant I worked in PHP,
        HTML, CSS, MySQL, and JavaScript. Since I was fairly junior at the time,
        the tech stack was chosen for me. I would be working with:
      </p>
      <ul>
        <li>Python,</li>
        <li>Flask,</li>
        <li>MySQL,</li>
        <li>and the familiar HTML/CSS/JS.</li>
      </ul>
      <p>
        I learn best by doing and, while apprehensive at first, I quickly got up
        to speed on the tech necessary. I looked into and evaluated Python
        libraries independently to use in the Flask application and settled on{" "}
        <code>SQLAlchemy</code> and <code>WTForms</code>. I was able to develop
        a usable MVP (minimum viable product) during the first development
        cycle.
      </p>
      <h2>Results</h2>
      <p>
        In 2020, I am now in my fourth annual four-month development cycle for
        this project. Each year since its inception, the SCE team has been able
        to use SMI to facilitate their workflow. Every year, I work with my team
        of student developers to add additional features to bring it closer to
        meeting all the SCE team's needs. There are still some spreadsheets
        kicking around, but the majority of their work is now done in the SMI
        application.
      </p>
      <p>
        Four years is a long time in the life of a web app, so this year I am
        also leading an effort to refactor the code to better align with modern
        tech. My focus is on making it more sustainable, easier to maintain, and
        easier to build on in the future. Some of my goals are to replace all
        instances of JQuery with vanilla JavaScript ES6, to improve
        accessibility, to improve performance, and to create a more attractive
        UI. To this end, my team now includes UX/UI design students from U-M's
        School of Information.
      </p>
    </main>
  </Layout>
)
