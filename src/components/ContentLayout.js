/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Header from "./Header"
import Footer from "./Footer"
import Wave from "./Wave"

const ContentLayout = ({ children, ...props }) => {
  return (
    <div {...props}>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

ContentLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ContentLayout
