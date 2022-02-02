import * as React from "react"
import Header from "./components/header"
import Footer from "./components/footer"
import SEO from "./components/SEO"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <SEO />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
