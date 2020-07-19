/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import SEO from "./SEO"

import Header from "./Header"
import Footer from "./Footer"

const ContentLayout = ({ children, pageName, ...props }) => {
  return (
    <div {...props}>
      <Header />
      {children}
      <Footer />
      <SEO pageName={pageName} />
    </div>
  )
}

ContentLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ContentLayout
