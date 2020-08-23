import React from "react"
import MyHelmet from "./helmet"
import Footer from "./footer"

const Layout = ({ children }) => (
  <div style={{ padding: "0 1rem" }}>
    <MyHelmet />
    <div>{children}</div>
    <Footer />
  </div>
)

export default Layout
