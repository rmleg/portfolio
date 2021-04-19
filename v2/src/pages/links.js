import React from "react"
import Layout from "../components/linksLayout"
import LinkForList from "../components/linkForList"
import "../styles/links.scss"

export default () => (
  <Layout>
    <h1 className="links-h1">Rachel Leggett's Internet Places</h1>
    <ul className="links">
      <LinkForList url="https://rachelleggett.com" title="Personal Website" />
      <LinkForList url="https://github.com/rmleg" title="GitHub" />
      <LinkForList url="https://www.linkedin.com/in/rmleg/" title="LinkedIn" />
      <LinkForList url="https://devyarns.com" title="Tech Blog" />
      <LinkForList
        url="https://www.youtube.com/channel/UCXLBncunjUQMO6HlxSRxewA"
        title="Accessibility Videos"
      />
      <LinkForList url="https://arbortwist.com" title="Knitting Patterns" />
      <LinkForList
        url="https://instagram.com/arbortwist"
        title="Knitting/Spinning/Sewing Instagram"
      />
      <LinkForList
        url="https://instagram.com/thepastrycats"
        title="Cat Instagram"
      />
      <LinkForList
        url="https://instagram.com/polervortex"
        title="Pole Dance Instagram"
      />
      <LinkForList url="https://twitter.com/rleggos" title="Twitter" />
    </ul>
  </Layout>
)
