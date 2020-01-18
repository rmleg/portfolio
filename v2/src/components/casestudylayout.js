import React from "react"
import MyHelmet from "./helmet"
import Footer from "./footer"

const Layout = ({ children }) => (
  <div>
    <MyHelmet />
    <div className="container casestudy">
      {children}
      <Footer />
    </div>
  </div>
)

export default Layout
