import React from "react"
import MyHelmet from "./helmet"
import Footer from "./footer"

const Layout = ({ children }) => (
    <div>
        <MyHelmet />
        <div>
            {children}
        </div>
        <Footer />
    </div>
)

export default Layout
