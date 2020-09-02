import React, { FunctionComponent } from "react"

import SEO from "./SEO"
import Container from "./Container"
import Footer from "./Footer"

const Layout: FunctionComponent<{ pageName?: string, className?: string }> = ({ children, pageName, ...props }) => {
  return (
    <div {...props}>
      {children}
      <SEO pageName={pageName} />
      <Container children={<Footer />} />
    </div>
  )
}

export default Layout
