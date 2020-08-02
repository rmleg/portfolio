import React from 'react'
import Layout from '../components/linksLayout'
import LinkForList from '../components/linkForList'
import '../styles/links.scss'

export default () => (
    <Layout>
        <h1>Where Else to Find Me</h1>
        <div className="links">
            <LinkForList url="https://twitter.com/rleggos" title="Twitter" />
            <LinkForList url="https://devyarns.com" title="Tech Blog" />
            <LinkForList url="https://arbortwist.com" title="Knitting Patterns" />
            <LinkForList url="https://instagram.com/arbortwist" title="Knitting/Spinning/Sewing Instagram" />
            <LinkForList url="https://instagram.com/polervortex" title="Pole Dance Instagram" />
            <LinkForList url="https://instagram.com/thepastrycats" title="Cat Instagram" />
        </div>
    </Layout>
)