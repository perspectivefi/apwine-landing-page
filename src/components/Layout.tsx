import React, { FunctionComponent } from "react"

import SEO from "./SEO"

const Layout: FunctionComponent<{ pageName?: string, className?: string }> = ({ children, pageName, ...props }) => {
  return (
    <div {...props}>
      {children}
      <SEO pageName={pageName} />
    </div>
  )
}

export default Layout
