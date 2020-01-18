import React from "react"
import { Helmet } from "react-helmet"
import { appleTouchIcon } from "../images/apple-touch-icon.png"
import { favicon16x16 } from "../images/favicon-16x16.png"
import { favicon32x32 } from "../images/favicon-32x32.png"
/* import { manifest } from "../images/site.webmanifest" */

function MyHelmet() {
  return (
    <Helmet>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <meta
        name="description"
        content="Web development portfolio for Rachel Leggett."
      />
      <link rel="apple-touch-icon" sizes="180x180" href={appleTouchIcon} />
      <link rel="icon" type="image/png" sizes="32x32" href={favicon32x32} />
      <link rel="icon" type="image/png" sizes="16x16" href={favicon16x16} />
      {/* <link rel="manifest" href={manifest} /> */}
      <title>Rachel Leggett</title>
    </Helmet>
  )
}

export default MyHelmet
