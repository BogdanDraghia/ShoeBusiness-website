import React from "react"

import Header from "./Layout-Components/Header"
import Footer from "./Layout-Components/Footer"
import SEO from "./SEO/seo"
import "../styles/app.scss"

const Layout = ({ children }) => {
  return (
    <div className="layoutwrapper">
      <SEO />
      <Header />
      <main>{children}</main>

      <Footer />
    </div>
  )
}
export default Layout
