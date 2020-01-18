import React from "react"
import Layout from "../components/casestudylayout"
import { Link } from "gatsby"

export default () => (
  <Layout>
    <header>
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <h1>Software Management Interface</h1>
    </header>
    <main>
      <h2>Overview</h2>

      <h2>Challenge</h2>

      <p>
        The Student Computing Environment Team is tasked with developing and
        deploying a world class computing environment for Michigan Engineering
        students. For years, the team has completed this incredibly involved
        annual process through a tangled network of spreadsheets, relying on
        institutional knowledge with no documented workflow. I was asked to lead
        the development of a web application the team could use to facilitate
        this process.
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
      <h3>Our Team</h3>
      <p>
        As lead developer on this project, I worked with a cross-functional team
        of highly talented professionals, such as:
        <ul>
          <li>Business analysts</li>
          <li>Project manangers</li>
          <li>Database architects</li>
        </ul>
      </p>

      <h2>Solution</h2>

      <h2>Results</h2>
    </main>
  </Layout>
)
